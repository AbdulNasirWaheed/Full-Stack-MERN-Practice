const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

app.use((err, req, res, next) => {
    if (err.type === "entity.parse.failed" || err.type === "entity.too.large") {
        return res.status(400).json({
            success: false,
            message: "Invalid JSON body: " + err.message
        });
    }
    next(err);
});

async function dbcon() {
    try {
        await mongoose.connect("mongodb://localhost:27017/skill-grid")

        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

dbcon();

const schema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    skills: [String],
});

const Student = mongoose.model("students", schema)

app.post("/create-student", async (req, res) => {
    try {    
        const student = await Student.create(req.body)
        if(!student) {
            return res.status(400).json({ 
                success: false,
                message: "Failed to create student" 
            });
        }   
        return res.status(200).json({ 
            success: true, 
            message: "Student created successfully" 
        }); 
    }
    catch (error) {
        return res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
});

app.listen(80, () => console.log("Server is running on port 80"));