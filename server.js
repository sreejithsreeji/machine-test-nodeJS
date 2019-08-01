const express=require('express');
const http=require('http');
const app=express();
const server=http.createServer(app);
require('dotenv').config();
const morgan=require('morgan');
const con=require('./dbconfig.js');
const bodyParser=require('body-parser')



//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const companyRoutes=require('./routes/company');
const employeeRoutes=require('./routes/employees');
const projectRoutes=require('./routes/projects');

app.use('/companies',companyRoutes);
app.use('/employees',employeeRoutes);
app.use('/projects',projectRoutes);


server.listen(`${process.env.PORT}`,()=>{
    console.log(`server listeing on port ${process.env.PORT}`)
});

