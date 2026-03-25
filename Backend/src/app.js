const express =require('express');
const app=express()
const cookieParser=require("cookie-parser")
const cors=require("cors")

app.use(cookieParser())
app.use(express.json())       
app.use(express.urlencoded({ extended: true }))
app.set("trust proxy", 1);

app.use(cors({
  origin: "https://gen-ai-theta-plum.vercel.app",
  credentials: true
}));

res.cookie("token", token, {
  httpOnly: true,
  secure: true,
  sameSite: "None"
});




// all routes here
const authRouter=require("./routes/auth.routes")
const interviewRouter =require("./routes/interview.routes")


// use all routes

app.use("/api/auth",authRouter)
app.use("/api/interview",interviewRouter)





module.exports=app