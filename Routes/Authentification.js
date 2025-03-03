const express = require('express');
const router = express.Router();
//const Credentials = require('../Models/CredentialsModel');
const jwt = require('jsonwebtoken')

const secret = "turing"
const user = "Alan"
const pw = "0000"

router.post('/login', (req,res)=>{
    const {username, password} = req.body
    if (username==user&&password==pw){
        jwt.sign({user: "Alan"},secret,(err,token)=>{
            if(!err){
                res.json({token})
            }else{
                res.status(401).json({message: "invalid credentials"})
            }
        })
    }else{
        res.status(401).json({message: "invalid credentials"})
    }
})

module.exports = router;
