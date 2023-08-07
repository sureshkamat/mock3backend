const mongoose=require('mongoose');

const adsSchema=new mongoose.Schema({
    name:String,
    description:String,
    category:String,
    image:String,
    location:String,
    postedAt:String,
    price:Number
})

const  AdsModel=mongoose.model('ads',adsSchema);
module.exports={AdsModel};