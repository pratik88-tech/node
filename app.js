const express=require("express");
const mongoose = require("mongoose");
const app =express()
const cors = require('cors');
app.use(cors());
app.use(express.json());
const noteRouter = require("./routes/noteRoutes")
app.get("/",function(req,res){
    res.send("It Worked");
})
app.get("/new",function(req,res){
    res.send("new also Worked");
})
app.use("/notes", noteRouter)
mongoose.connect("mongodb+srv://admin:admin@cluster0.m7qftvs.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("Mongodb Connected successfully")
})
.catch((error)=>{
    console.log(error)
})
app.listen(process.env.PORT || 5000,()=>{
    console.log("server started at port no :5000 ")
})
module.exports=app