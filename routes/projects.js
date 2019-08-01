const express=require('express');

const router=express.Router({mergeParams:true});
const projectController=require('../controllers/projects.js');

router.post('/',(req,res)=>{
    projectController.addProjects(req,res);

})

router.post('/assign-employee',(req,res)=>{
    projectController.assignEmployee(req,res);
});

router.delete('/:id',(req,res)=>{
    projectController.deleteProject(req,res)
})

router.get('/:id/employees',(req,res)=>{
    projectController.getEmployeeDetailsByproject(req,res);
})

module.exports=router;