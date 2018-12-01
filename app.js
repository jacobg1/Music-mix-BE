require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const songs = require('./routes/songs')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(songs)

app.listen(port, () => console.log(`Listening on port ${port}!`))