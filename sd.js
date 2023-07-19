const express = require('express');

const http = require('http');

var postData = JSON.stringify({email: 'awsumbret@gmail.com'});

/**async function createListing(client, newListing){
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
} */
const options = {
    hostname: 'localhost',
    port: 8082,
    path: '/login',
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
    }
};

const req = http.request(options, (res) => {
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data in response.');
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

// write data to request body
req.write(postData);
req.end();