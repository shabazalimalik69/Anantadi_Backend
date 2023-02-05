const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
    videos:[{type:String,required:true}],
    name:{type:String,required:true},
    type:{type:String,required:true},
},{timestamps:true});

const Video = mongoose.model("Video",videoSchema);

module.exports = Video;