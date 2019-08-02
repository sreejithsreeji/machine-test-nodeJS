
const express=require('express');
const router=express.Router({mergeParams:true});
const shopController=require('../controllers/shop.js');

router.get('/distance/find?',(req,res)=>{
    shopController.findDistance(req,res);
})

module.exports=router;