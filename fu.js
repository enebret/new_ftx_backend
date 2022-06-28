const express = require('express');
var bodyParser = require('body-parser');
const userR = require('./routes/signup.js');
const connectDB = require('./config/db');
const User = require('./models/user');

const app = express();
const cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
connectDB();

User.findOne({email: 'awsumbret@gmail.com'})
.then(user => {
    console.log(user)
})
    