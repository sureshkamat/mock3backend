const {Router} =require('express');
const {AdsModel}=require('../models/ads.model');
const postRouter=Router();

postRouter.post("/",async(req,res)=>{
    const {name,description,category,image,location,postedAt,price}=req.body;
    const new_ads=new AdsModel({
        name,
        description,
        category,
        image,
        location,
        postedAt,
        price
    })
    await new_ads.save();
    res.send("Ad Posted on Olx");
})





postRouter.delete("/delete/:Id",async(req,res)=>{
    const adId=req.params.Id;
    await AdsModel.findByIdAndDelete(adId);
    res.send("Olx Ad Deleted");
})


module.exports={postRouter};