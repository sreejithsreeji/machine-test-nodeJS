const express=require('express');
const router=express.Router({mergeParams:true});
const empController=require('../controllers/employees.js');

router.get('/',(req,res)=>{
    empController.getEmployees(req,res);
})

router.get('/:id/projects',(req,res)=>{
    empController.getProjects(req,res)
})



module.exports=router;