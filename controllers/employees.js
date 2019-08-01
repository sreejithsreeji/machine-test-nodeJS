

const empModel=require("../models/employee.js");


const getProjects=(req,res)=>{

    const id=req.params.id;
    empModel.getProjects(id)
    .then(projects=>{
        res.status(200)
        .send({
            status:200,
            message:"Project list",
            results:projects

        })
    })
    .catch(err=>{
        res.status(500)
        .send({
            status:500,
            message:err
        })
    })
}

const getEmployees=(req,res)=>{

    empModel.getEmployees()
    .then(employees=>{
        res.status(200)
        .send({
            code:200,
            status:true,
            result:employees
        })
    })
    .catch(err=>{
        res.status(500)
        .send({
            code:500
        })
    })
}

module.exports={
    getEmployees,
    getProjects
}