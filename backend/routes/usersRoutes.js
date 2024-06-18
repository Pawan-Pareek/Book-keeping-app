//Authentication

const express = require('express');
const User=require('../models/User');
const authMiddleware=require('../middlewares/authMiddleware')
const usersRoutes=express.Router();

//this package is use to handle error
const asynHandler=require('express-async-handler');
const generateToken = require('../utils/generateToken');

//Register
// postman api sending request to fetch data and this code below send response
usersRoutes.post('/register',asynHandler(async (req,res)=>{
    const {name,email,password} = req.body;


    //{ email: email } :  we're specifying that we want to find a document where the value of the email field matches the value stored in the variable email.
    const userExists=await User.findOne({email:email});

    if(userExists){
        throw new Error('User Exist');
    }

    const userCreated = await User.create({email,name,password});

    res.json({
        _id: userCreated._id,
        name:userCreated.name,
        password:userCreated.password,
        email:userCreated.email,
        token:generateToken(userCreated._id)
    });
}));


//Login
usersRoutes.post('/login',asynHandler(async (req,res)=>{
    const {email,password}=req.body;

    const user=await User.findOne({email});

    if(user && (await user.isPasswordMatch(password))){
        //set status code
        res.status(200);

        res.json({
            _id: user._id,
            name:user.name,
            password:user.password,
            email:user.email,
            token:generateToken(user._id)
        });
    }else{
        res.status(401);
        throw new Error('Invalid Credentials');
    }
}));

//Update users
usersRoutes.put('/update',authMiddleware,(req,res)=>{
    res.send('update routes')
});

//delete users
usersRoutes.delete('/:id',(req,res)=>{
    res.send('Delete Route')
})

//fetch users
usersRoutes.get('/',authMiddleware,(req,res)=>{
    res.send(req.user);
})

module.exports=usersRoutes;