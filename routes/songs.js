const express = require('express'),
      router = express.Router()

router.get('/songs/:song', function (req, res) {

    res.send(req.params)

})

module.exports = router