
/*jshint esversion: 8 */
const express = require('express');
const res = require( 'express/lib/response' );
const userR = require('./routes/signup.js');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/user', userR);

//app.use()

const port = process.env.PORT || 8082;

let localhost = `http://localhost:${port}`;

app.listen(port, () => console.log(`Server running on port ${localhost}`));