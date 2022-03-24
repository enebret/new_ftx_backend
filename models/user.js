/*jshint esversion: 8 */

//should be populated with more data as this model is used when a new user is created


const mongoose = require('mongoose')

const model = mongoose.Schema({
    email: {
        type: String,
        required: true
    }
});

module.exports = new mongoose.model("User", model)
