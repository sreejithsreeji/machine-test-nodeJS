
const shopModel=require('../models/shop.js');

const findDistance=(req,res)=>{
    shopModel.distanceCalculater(req.query)
    .then(data=>{
        console.log(data);
        res.status(200)
        .send({
            code:200,
            message:'distance',
            unit:"km",
            result:data
        })
    })
    .catch(err=>{
        res.sendStatus(500);
    })
}

module.exports={
    findDistance
}