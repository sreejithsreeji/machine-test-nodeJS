const companyModel=require('../models/company.js');
//const moment=require('moment')

const updateCompanyDetails=(req,res)=>{
    companyModel.updateCompany(req.body,req.params.id)
    .then(response=>{
            res.status(201)
            .send({
                code:201,
                message:'Company details updated'
            })
        })
        .catch(err=>{
            console.log(err);
            res.status(500).send({
                code:500,
                message:err
            })
        })
}

const addEmployee=(req,res)=>{
    
    companyModel.addEmployee(req.body)
    .then(data=>{
        res.status(201)
        .send({
            code:201,
            message:'employee details saved successfully'
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).send({
            code:500,
            message:err
        })

    })
}

const getEmployeeProjectDetails=(req,res)=>{
  companyModel.getProjects()
  .then(projects=>{
      res.status(200)
      .send(projects)
  })
  .catch(err=>{
      res.status(500);
  })
}



module.exports={
    updateCompanyDetails,
    addEmployee,
    getEmployeeProjectDetails
}