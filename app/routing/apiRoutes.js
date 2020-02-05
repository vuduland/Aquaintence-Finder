var friendsObject = require('../data/friends');
var app = require('express');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(friendsObject);
  });

  app.post('/api/friends', function(req, res) {
    var friendo = {
      name: '',
      photo: '',
      diff: Number
    };

    var inputData = req.body;
    var comp = inputData.scores;
    var difference;

    for (var i = 0; i < friendsObject.length; i++) {
      var friendForNow = friendsObject[i];
      difference = 0;

      console.log(friendForNow.name);

      for (let j = 0; j < friendForNow.scores.length; j++) {
        let score = friendForNow.scores[j];
        let userScore = comp[j];
        difference += Math.abs(parseInt(userScore)) - parseInt(score);
      }

      if (difference <= match.friendo.diff) {
        match.name = friendForNow.name;
        match.photo = friendForNow.photo;
        match.diff = difference;
      }
    }

    friendsObject.push(inputData);

    res.json(match);
  });
};

// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
