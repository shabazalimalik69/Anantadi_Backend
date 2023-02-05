const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const { getVideo, uploadVideo } = require("../Controllers/videoController");

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        if(!fs.existsSync("public")){
           fs.mkdirSync("public");
        }

        if(!fs.existsSync("public/videos")){
            fs.mkdirSync("public/videos");
         }
         cb(null,"public/videos");
    },
    filename:function(req,file,cb){
      cb(null,Date.now()+file.originalname)
    }
});

const upload = multer({
    storage:storage,
    fileFilter:function(req,file,cb){
        var ext = path.extname(file.originalname);

        if(ext !== ".mkv" && ext !== ".mp4"){
             return cb(new Error("Only video are allowed!"))
        };
        cb(null,true);
    }
})
const Router = express.Router();

Router.post("/uploadVideo",upload.fields([{
 name : "videos",
 maxCount:5,
}]),uploadVideo);

Router.get("/getVideo",getVideo);

module.exports = Router;