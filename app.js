
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


app.post('/signup', (req, res) => {
    console.log(req.body.email);
    User.findOne({email: req.body.email})
    .then(user => {
        if(!user){
            const newUser = new User(req.body); //using model
            newUser.save()
            .then(user => {
                res.send(user);
            })
            .catch(error => {
                res.status(500).json(error);
            });
        }
        else if(user){
            //validate password
            //set cookie
            //redirect to dahsboard
            res.send('already registered');
        }
    });
    //check if user already has an account else proceed to creating a new account
    //hash password
    //redirect to dashboard
    
});
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