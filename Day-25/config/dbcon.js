const mongoose = require('mongoose');

async function dbcon(){
  try{
    await mongoose.connect("mongodb://127.0.0.1:27017/skill")
    console.log("db connected")
  }
  catch(err){
    console.log(err)
  }
}

module.exports = dbcon;