/*jshint esversion: 8 */

//should be populated with more data as this model is used when a new user is created


const mongoose = require('mongoose');

const model = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

const User = mongoose.model("User", model);
module.exports = User;