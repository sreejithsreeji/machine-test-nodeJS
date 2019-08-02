
const moment=require('moment');
const con=require('../dbconfig.js');

const register=(params)=>{
    const user={
        ...params,
    
        created_at:moment().format(),
        updated_at:moment().format()
    }

    const sql='insert into users set ?';
    return new Promise((resolve,reject)=>{
        con.query(sql,[user],(err,rows,fields)=>{
            if(err) reject(err);
            resolve(rows);
        })
    })
}

module.exports={
    register
}