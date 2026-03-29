const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
// Cookie parser
const cookieParser = require("cookie-parser");
//express session
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
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



//Express-sessions using npm package
const sessionOptionns = {
    secret: "mysupersecretstring",
    resave: false, 
    saveUninitialized:true};

    app.use(session(sessionOptionns));
    app.use(flash());

    app.get("/register",(req,res)=>{
        let{name="anonymous"}=req.query;
        req.session.name=name;
        req.flash("sucess","user registered succesfully")
        res.redirect("/hello");
    })

    app.get("/hello",(req,res)=>{
        res.render("page.ejs",{name:req.session.name,msg:req.flash("sucess")});
    });

// app.get("/reqcount",(req,res)=>{
//     if(req.session.count){
//          req.session.count++;
//     }else{
//         req.session.count = 1;
//     }
//     res.send(`you send a request ${req.session.count} time`);
// });
// app.get("/test",(req,res)=>{
//     res.send("test succesful");
// })

app.listen(3000,()=>{
    console.log("server is listening to 3000");
});