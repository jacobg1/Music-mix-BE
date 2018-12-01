const axios = require('axios')


function getToken() {
    let client_id = process.env.CLIENT_ID
    let client_secret = process.env.CLIENT_SECRET
    // var authToken = []
   
   return axios({
        method: 'POST',
        url: process.env.TOKEN_URL,
        params: {
            grant_type: 'client_credentials'
        },
        headers: {
            'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')),
        }


    })
        .then(function (response) {

            return response.data.access_token
      

        })
        .catch(function (error) {
            console.log(error)
        })
        
    // return authToken
}

module.exports = getToken