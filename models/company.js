const con=require('../dbconfig.js');
const rp=require('request-promise');
require('dotenv').config();
const moment=require('moment');
const updateCompany=(params,id)=>{

    const data={...params};
    data.created_at=moment().format();
    data.updated_at=moment().format();

    let sql='update companies set ? where id=?';
    return new Promise((resolve,reject)=>{
        con.query(sql,[data,id],(err,rows,fields)=>{
            if(err) reject(err);
            resolve(rows);
        })
    })
}

 const addEmployee= async (params)=>{

    const employee={
        ...params,
        created_at:moment().format(),
        updated_at:moment().format()
    }
    let sql='insert into employees set ?';
    return await con.query(sql,[employee])
}

const getProjects=async ()=>{

    // this can be done by a single sql query. i can't understand why we approcah like this

    let results=[];
    var options = {
        uri: `http://localhost:${process.env.PORT}/employees`,
        json: true // Automatically parses the JSON string in the response
    };
   const p1= await rp(options);
   const employees=p1.result;
   //console.log(employees);

   let result=[];
   for(let employee of employees){

    let emp={
        employee_id:employee.id,
        name:employee.name,
        projects:[]
    }
    let options = {
        uri: `http://localhost:${process.env.PORT}/employees/${employee.id}/projects`,
        json: true // Automatically parses the JSON string in the response
    };
    let p2=await rp(options);
    for(let project of p2.results){
        const picked=({id,name}=project,{id,name})
        emp.projects.push(picked)
    }
    result.push(emp);
   }
  // console.log(JSON.stringify(result));
   return(result);
    
}

module.exports={
    updateCompany,
    addEmployee,
    getProjects
}

/*getProjects().then(data=>{
    console.log(data)
});

/*updateCompany({name:'yxgs dvggdgd gdg'},1)
.then(res=>{
    console.log(res);
})
.catch(err=>{
    console.log(err);
})*/

/*addEmployee({name:"sreejith"})
.then(res=>{
    console.log(res);
})
.catch(err=>{
    console.log(err);
})*/
