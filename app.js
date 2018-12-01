require('dotenv').config();

const express = require('express')
const app = express()
const axios = require('axios')
const port = process.env.PORT || 3000
const songs = require('./routes/songs')

// var authorize = function (req, res, next) {
//     console.log('test')

//     next()

// }

app.all('*', function (req, res, next) {
   
    axios.get('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'text/plain'
        }
    })
    .then(function (response) {
        console.log(response.data)
    })

    next()
})

// app.use(authorize)
app.use(songs)

app.listen(port, () => console.log(`Listening on port ${port}!`))