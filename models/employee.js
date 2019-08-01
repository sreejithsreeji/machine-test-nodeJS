const con=require('../dbconfig.js');

const getEmployees=()=>{
    let sql='select * from employees';
    return new Promise((resolve,reject)=>{
        con.query(sql,(err,rows,fields)=>{
            if(err) reject(err);
            resolve(rows);
        })
    })
}

const getProjects=(id)=>{
    let sql='select * from projects p join employee_projects ep on p.id=ep.project_id where ep.employee_id=? ';
    return new Promise((resolve,reject)=>{
        con.query(sql,[id],(err,rows,fields)=>{
            if(err) reject(err);
            resolve(rows);
        })
    })
}



module.exports={
    getEmployees,
    getProjects
}