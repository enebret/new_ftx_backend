
/*jshint esversion: 8 */
const express = require('express');
const res = require( 'express/lib/response' );

const app = express();

app.get('/', (req, res) => res.send('Hello world!'));

app.get('/user', (req,res) => res.send('User'));

const port = process.env.PORT || 8082;

let localhost = `http://localhost:${port}`;

app.listen(port, () => console.log(`Server running on port ${localhost}`));