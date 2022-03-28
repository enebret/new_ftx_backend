
/*jshint esversion: 8 */
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


app.use('/login', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

app.get('/', (req, res) => res.send('Hello world!'));


//login with authentication
app.post('/login', (req, res) => {
    User.findOne({email: req.body.email})
    .then(user => {
        if(!user){
            res.send('not user');
        }
        else if(req.body.password===user.password  ){
            //validate password
            //set cookie
            //redirect to dahsboard
            res.send('welcome');
        }
    });
   
});

app.use('/user', userR);
app.use(express.json());

//app.use()

const port = process.env.PORT || 8082;

let localhost = `http://localhost:${port}`;

app.listen(port, () => console.log(`Server running on port ${localhost}`));