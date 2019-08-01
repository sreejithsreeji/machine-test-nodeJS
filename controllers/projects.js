
const projectModel=require('../models/project.js');


const addProjects=(req,res)=>{

    projectModel.addProjects(req.body)
    .then(data=>{
        res.status(201)
        .send({
            code:201,
            message:'project details saved successfully'
        })
    })
    .catch(err=>{
        res.status(500)
        .send({
            code:500,
            message:err
        })
    })
}

const deleteProject=(req,res)=>{
    projectModel.deleteProject(req.params)
    .then(response=>{
        res.status(200).send({
            status:200,
            message:response.affectedRows>0?'Project deleted successfully':'No data exists'
            
        })
    })
    .catch(err=>{
        res.status(500).send({
            status:500,
            message:err
        })
    })
}

const getEmployeeDetailsByproject=(req,res)=>{
    projectModel.getEmployeesByProject(req.params)
    .then(employees=>{
        res.status(200)
        .send({
            status:200,
            results:employees,

        })
    })
    .catch(err=>{
        res.status(500).send({
            error:err
        })
    })
}

const assignEmployee=(req,res)=>{
    projectModel.assignEmployee(req.body)
    .then(response=>{
        res.status(201)
        .send({
            code:201,
            message:'employee assigned successfully'
        })
    })
    .catch(err=>{
        if(err.errno===1062){
            res.status(500).send({
                message:"record already exists"
            })
        }else{
            res.status(500).send({
                message:"something error happends"
            })
        }
   
    })
}
module.exports={
    addProjects,
    deleteProject,
    getEmployeeDetailsByproject,
    assignEmployee
}