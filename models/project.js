const con=require('../dbconfig.js');
const moment=require('moment');

const addProjects=(params)=>{
    const project={
        ...params,
        created_at:moment().format(),
        updated_at:moment().format()
    }

    const sql='insert into projects set ?';
    return new Promise((resolve,reject)=>{
        con.query(sql,[project],(err,rows,fields)=>{
            if(err) reject(err);
            resolve(rows);
        })
    })
}

const deleteProject=(params)=>{
    const sql='delete from projects where id=?';
    return new Promise((resolve,reject)=>{
        con.query(sql,[params.id],(err,rows,fields)=>{
            if(err) reject(err);
            resolve(rows);
        })
    })
}

const getEmployeesByProject=(params)=>{
    let sql='select * from employees e join employee_projects ep on e.id=ep.employee_id where ep.project_id=? ';
    return new Promise((resolve,reject)=>{
        con.query(sql,[params.id],(err,rows,fields)=>{
            if(err) reject(err);
            resolve(rows);
        })
    })
}

const assignEmployee=(params)=>{

    const data={
        employee_id:params.empId,
        project_id:params.projectId,
        updated_at:moment().format()
    }
    let sql='insert into employee_projects set ?';
    return new Promise((resolve,reject)=>{
        con.query(sql,[data],(err,rows,fields)=>{
            if(err) reject(err);
            resolve(rows);
        })
    })

}

module.exports={
    addProjects,
    deleteProject,
    getEmployeesByProject,
    assignEmployee
}

