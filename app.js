
/*jshint esversion: 8 */
const express = require('express');
var bodyParser = require('body-parser');
const userR = require('./routes/signup.js');
const connectDB = require('./config/db');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
connectDB();



app.get('/', (req, res) => res.send('Hello world!'));

app.use('/user', userR);
app.use(express.json());

//app.use()

const port = process.env.PORT || 8082;

let localhost = `http://localhost:${port}`;

app.listen(port, () => console.log(`Server running on port ${localhost}`));