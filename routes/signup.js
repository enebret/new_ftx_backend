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
    console.log(req.body);
    const newUser = new User(req.body); //using model
            newUser.save()
            .then(user => {
                res.send(user);
            })
            .catch(error => {
                res.status(500).json(error);
            });
});



module.exports = router;