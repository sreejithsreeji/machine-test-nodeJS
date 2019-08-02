const express=require('express');
const router=express.Router({mergeParams:true});
const multer=require('multer');
const uploadCtrl=require('../shared/upload.js');
const userControl=require('../controllers/user.js');
const userValidater=require('../validaters/validater.js');


const uploadConfig = {
    engine: multer,
    folder: "/uploads",
    fileType: "image/jpeg",
    maxSize: 1 * 1000 * 1000,
    field: "image"
  };
  const upload = uploadCtrl.upload(uploadConfig);
  let uploadFile = (req, res, next) => {
    upload(req, res, err => {
      if (err) {
        res.status(200).send({
          status: false,
          code: err.code,
          message:
            err.code == "LIMIT_FILE_SIZE"
              ? "File exceeds maximum limits..Max file size should be below 2MB"
              : err
        });
      } else {
        next();
      }
    });
  };

  router.post('/register',uploadFile,userValidater.validate,(req,res)=>{
    userControl.register(req,res);
  })

  module.exports=router;