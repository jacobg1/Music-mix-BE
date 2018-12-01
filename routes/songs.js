require('dotenv').config();


const express = require('express')
const router = express.Router()
var request = require('request');
const getToken = require('../utils/getToken.js')

router.get('/songs', function (req, res) {
    
getToken().then(data => {
    var options = {
        url: 'https://api.spotify.com/v1/tracks/3n3Ppam7vgaVa1iaRUc9Lp',
        headers: {
            'Authorization': 'Bearer ' + data
        },
        json: true
    };
    request.get(options, function (error, response, body) {
        res.send(body);
    });

})

    

})

module.exports = router