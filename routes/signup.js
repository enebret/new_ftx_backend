/*jshint esversion: 8 */
const express = require('express');
const router = express.Router();

router.get('/signup', (req,res) => res.send('User'));

module.exports = router;