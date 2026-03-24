const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");



app.get("/",(req,res)=>{
    res.send("hi , i am root !")
});

app.use("/users",users);
app.use("/posts",posts);

//posts
//index 

app.get("/posts",(req,res)=>{
    res.send("GET for posts");
});
//show 

app.get("/posts/:id",(req,res)=>{
    res.send("GET for posts id");
});

//POST 

app.post("/posts",(req,res)=>{
    res.send("POST for post");
});

//Delete 

app.delete("/posts/:id",(req,res)=>{
    res.send("Delete for posts id");
});


app.listen(3000,()=>{
    console.log("server is listening to 3000");
});