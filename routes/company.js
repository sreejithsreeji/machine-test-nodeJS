const express=require('express');
const router=express.Router({mergeParams:true});
const companyController=require('../controllers/company.js');



router.put('/:id',(req,res)=>{
    
    companyController.updateCompanyDetails(req,res);
})

router.post('/add-employee',(req,res)=>{
    companyController.addEmployee(req,res);
})

router.get('/projects',(req,res)=>{
    companyController.getEmployeeProjectDetails(req,res);
})

module.exports=router;

