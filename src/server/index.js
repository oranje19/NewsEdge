const dotenv = require('dotenv');
dotenv.config();

var path = require('path')

var aylien = require("aylien_textapi");

const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests

const port = 8081;

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

console.log(`Your API id is ${process.env.API_ID}`);
console.log(`Your API key is ${process.env.API_KEY}`);

// set aylien API credentials
var textapi = new aylien ({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});
