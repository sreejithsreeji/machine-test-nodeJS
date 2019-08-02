

const userModel=require('../models/user.js');

const register=(req,res)=>{
    
    userModel.register({ ...req.body,image:req.file?req.file.path:null})
    .then(response=>{
        res.status(201)
        .send({
            staus:true,
            code:201,
            message:'user registration completed'
        })
    })  
    .catch(err=>{
        console.log(err);
        res.sendStatus(500);
    })  
}

module.exports={
    register
}