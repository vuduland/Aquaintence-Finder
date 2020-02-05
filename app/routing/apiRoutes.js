// var app = require('express')();
var friendsArr = require('../data/friends');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(friendsArr);
  });

  app.post('/api/friends', function(req, res) {
    var aNewFiend = {
      name: '',
      photo: '',
      diff: Infinity
    };

    var inputData = req.body;
    console.log(inputData);
    var userScores = inputData.scores;
    var totalDiff;

    for (var i = 0; i < friendsArr.length; i++) {
      var aquaintence = friendsArr[i];
      totalDiff = 0;

      console.log(aquaintence.name);

      for (let j = 0; j < aquaintence.scores.length; j++) {
        let score = aquaintence.scores[j];
        userScore = userScores[j];

        totalDiff += Math.abs(parseInt(userScore)) - parseInt(score);
      }

      if (totalDiff <= aNewFiend.diff) {
        aNewFiend.name = aquaintence.name;
        aNewFiend.photo = aquaintence.photo;
        aNewFiend.diff = totalDiff;
      }
    }

    friendsArr.push(inputData);

    res.json(aNewFiend);
  });
};

// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
