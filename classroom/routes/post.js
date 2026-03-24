const express = require("express");
const router = express.Router();

//posts
//index 

router.get("/",(req,res)=>{
    res.send("GET for posts");
});
//show 

router.get("/:id",(req,res)=>{
    res.send("GET for posts id");
});

//POST 

router.post("/",(req,res)=>{
    res.send("POST for post");
});

//Delete 

router.delete("/:id",(req,res)=>{
    res.send("Delete for posts id");
});

module.exports = router;