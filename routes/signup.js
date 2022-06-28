/*jshint esversion: 8 */
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const rounds = 10;

const jwt = require('jsonwebtoken');
const tokenSecret = 'test-app';

router.get('/signup', (req,res) => res.send('User'));

router.post('/signup', (req, res) => {
    console.log(req.body.email);
    //check if user already has an account else proceed to creating a new account
    //hash password
    //redirect to dashboard
    const newUser = new User(req.body); //using model
            newUser.save()
            .then(user => {
                res.send(user);
                console.log(user);
            })
            .catch(error => {
                res.status(500).json(error);
            });
});

router.get('/login', (req,res) => res.send('User'));

router.post('/login', (req,res) => {
    User.findOne({email: req.body.email})
    .then(user => {
        if(!user){
            res.status(404).json({error: 'no user with email found'});
        }
        else if(req.body.password===user.password  ){
            //validate password
            //set cookie
            //redirect to dahsboard
            res.send('welcome');
        }
    });
});

module.exports = router;