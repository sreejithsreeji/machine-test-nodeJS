const JOI=require('joi');

const user={
    register:JOI.object().keys({
         name:JOI.string()
        .regex(/^[A-Za-z]{1,20}/) 
        .required(),
        email:JOI.string().email({ minDomainSegments: 2 }).min(3).required(),
        phone:JOI.string().trim().regex(/^[0-9]{7,10}$/)
        .required()
    })
}

module.exports={
    user
}
