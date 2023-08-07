const express=require('express');
const {AdsModel}=require('./models/ads.model')
const {connection}=require("./utils/db");
const cors=require('cors');
const {postRouter}=require("./routes/postClassified.router");
const {browseRouter}=require("./routes/browseClassified.router");
const app=express();

app.use(express.json());
app.use(cors({
    origin:"*"
}))

app.get("/",(req,res)=>{
    res.send("Base Olx url here");
})

app.use("/post",postRouter);
app.use("/browse",browseRouter);




app.listen(5000,async()=>{
    try{
        await connection;
        console.log("DBMS COnnected");
    }catch(err){
        console.log(err);
    }
    console.log("Server is Running on port 5000");
})