const express = require('express')
const router = express.Router()
const User = require('../models/Users')
const { body, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken")
const jwtSecret = "m#5u%p/5u?+6Jv!F?YF8273-r:?vWu;-"
const bcrypt = require("bcryptjs");
const { genSalt } = require('bcryptjs');




router.post("/createuser", [
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', 'Incorrect Password').isLength({ min: 5 })],
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const salt = await bcrypt.genSalt(10)
            let secPassword = await bcrypt.hash(req.body.password, salt)

            await User.create({
                name: req.body.name,
                password: secPassword, // ✅ hashed password stored
                email: req.body.email,
                location: req.body.location,
            })

            res.json({ success: true });
        } catch (error) {
            console.log(error)
            res.status(500).json({ success: false, error: "Server Error" });
        }
    })


router.post("/loginuser", [
    body('email').isEmail(),
    body('password', 'Incorrect Password').isLength({ min: 5 })],
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let email = req.body.email

        try {
            let userData = await User.findOne({ email });
            if (!userData) {
                res.status(400).json({ errors: "Try logging with correct credentials" });
            }


            const pwdCompare = await bcrypt.compare(req.body.password, userData.password) 
            if (!pwdCompare) {
                res.status(400).json({ errors: "Try logging with correct credentials" });
            }



            const data = {
                user:{
                    id:userData.id
                }
            }

            const authToken = jwt.sign(data, jwtSecret)
            res.json({ success: true, authToken:authToken });

        } catch (error) {
            console.log(error)
            res.json({ success: false });
        }
    })

module.exports = router