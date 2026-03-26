const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
// Cookie parser
const cookieParser = require("cookie-parser");
const session = require("express-session");
// app.use(cookieParser("secretcode"));
// send signed cookies
// app.get("/getsignedcookie",(req,res)=>{
//     res.cookie("made-in","india",{signed:true});
//     res.send("signeed cookie send");
// })
// verify signed cookies
// app.get("verify",(req,res)=>{
//     console.log(req.signedCookies);
//     res.send("verified");
// })
// send cookie to server
// app.get("/getcookies",(req,res)=>{
//     res.cookie("greet","hello");
//     res.cookie("madein","india");
//     res.send("sent you some cookies");
// })
// app.get("/greet",(req,res)=>{
//     let {name = "anonymous" } = req.cookies;
//     res.send(`hi ,${name}`);
// });
// cookie parse 
// app.get("/",(req,res)=>{
//     console.dir(req.cookies);
//     res.send("hi , i am root !")
// });

// app.use("/users",users);
// app.use("/posts",posts);

app.use(session({secret: "mysupersecretstring"}));

app.get("/test",(req,res)=>{
    res.send("test succesful");
})

app.listen(3000,()=>{
    console.log("server is listening to 3000");
});