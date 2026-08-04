const mongoose = require('mongoose');

const schema=new mongoose.Schema({
  title: {type:String,required:true},
  description: {type:String,required:true},
  thumbnail: {type:String, default: ""}
})

const Blog = mongoose.model('blogs', schema);
module.exports = Blog;