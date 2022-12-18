var express = require('express');
var router = express.Router();
var playlists = require('../spotify.js');

//Send playlists
router.get('/', function (req, res, next) {
  res.send(playlists)
})

module.exports = router;