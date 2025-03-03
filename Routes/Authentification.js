const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Cred = require('../Models/CredentialsModel')
const router = express.Router()

router.post('/register', async (req, res) => {
    const { email, nom, prenom, mdp } = req.body
    if (!email || !nom || !prenom || !mdp) {
      return res.status(400).json({ message: "Please verify your input fields" })
    }
    const inst = await Cred.findOne({ email })
    if (inst){ 
        return res.status(400).json({ message: "This email is already used" })
    }
    const hpw = await bcrypt.hash(mdp, 10)
    const user = new Cred({ email, nom, prenom, mdp: hpw })
    await user.save()
    res.status(201).json({ message: "User created successfully" })
  })
  

router.post('/login', async (req, res) => {
    const { email, mdp } = req.body
    const user = await Cred.findOne({ email })
    if (!user){
        return res.status(400).json({ message: "User not found" })
        }
    const check = await bcrypt.compare(mdp, user.mdp)
    if (!check){
         return res.status(400).json({ message: "Invalid Credentials" })
        }
    const token = jwt.sign({ useremail: user.email }, 'secret')
    res.json({ token })
})
  
module.exports = router;
