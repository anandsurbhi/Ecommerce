const router=require('express').Router();
const User=require("../models/User.model");

router.get('/user/login',(req,res)=>{
    res.render('User/login');
})

router.get('/user/signup',(req,res)=>{
    res.render('User/signup');
})

module.exports=router;