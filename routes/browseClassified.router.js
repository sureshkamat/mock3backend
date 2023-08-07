const {Router} =require('express');
const {AdsModel}=require('../models/ads.model');
const browseRouter=Router();

browseRouter.get("/ads",async(req,res)=>{
    try{
        const {category,sort,search,page}=req.query;
        const query={};
        if(category) query.category=category;
        if(search) {
            const searchQuery=new RegExp(search,'i');
            query.$or=[
                {name:searchQuery },
                {description:searchQuery}
            ];
        }

        const totalCount=await AdsModel.countDocuments(query);
        const sortOptions={}
        if(sort==='asc'){
            sortOptions.postedAt=1
        }
        if(sort==='desc'){
            sortOptions.postedAt=-1
        }
        const pageSize=4;
        const skip=(page-1)*pageSize;
        const classified=await AdsModel.find(query).sort(sortOptions).skip(skip).limit(pageSize);
        res.json({
            total:totalCount,
            page,
            pageSize,
            classified
        })
    }catch(err){
        console.log(err);
        res.status(500).json({error:'server error'})
    }
})






module.exports={browseRouter};