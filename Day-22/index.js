const express= require("express")
const mongoose=require("mongoose")
const app=express()
app.use(express.json())


async function dbcon(){
  try{
    await mongoose.connect("mongodb://127.0.0.1:27017/skillUp")
    console.log("db connected")
  }
  catch(err){
    console.log(err)
  }
}

dbcon()

const schema=new mongoose.Schema({
  name: {type:String,required:true},
  age: {type:Number,required:true},
  email: {type:String,required:true}
})

const Model=mongoose.model("Students1",schema)

app.post("/create-student",async (req,res)=>{
  try{
    const student = await Model.create(req.body)
    if(!student) {
        return res.status(400).json({success:false, message:"student create failed"})
    }

    return res.status(200).json({success:true, message:"student create success", student})
  }
  catch(err){
    console.log(err)
    return res.status(500).json({success:false, message:"internal server error"})
  }
})
app.get("/get-students",async (req,res)=>{
  try{
    const students = await Model.find()
    return res.status(200).json({success:true, message:"students fetched successfully", students})
  }
  catch(err){
    console.log(err)
    return res.status(500).json({success:false, message:"internal server error"})
  }
})
app.delete("/delete-student/:id",async (req,res)=>{
  try{
    const {id} = req.params
    const students = await Model.findByIdAndDelete(id)  
    return res.status(200).json({success:true, message:"student deleted successfully", students})
  }
  catch(err){
    console.log(err)
    return res.status(500).json({success:false, message:"internal server error"})
  }
})
app.put("/update-student/:id",async (req,res)=>{
  try{
    const {id} = req.params
    const students = await Model.findByIdAndUpdate(id, req.body, {new:true})  
    return res.status(200).json({success:true, message:"student updated successfully", students})
  }
  catch(err){
    console.log(err)
    return res.status(500).json({success:false, message:"internal server error"})
  }
})
app.get("/test",async(req,res)=>{
  res.send("hello")
}
)
app.listen(30,()=>{
  console.log("server started")
})



