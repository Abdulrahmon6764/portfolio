const express = require('express');
const router = express.Router();
const path = require('path');
router.get('/',(req,res)=>{
   res.sendFile(path.join(__dirname, '../','views','index.html'))
});
router.get('/services',(req,res)=>{
   res.sendFile(path.join(__dirname, '../','views','service.html'))
});
router.get('/contacts',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','contact.html'))
});
module.exports=router