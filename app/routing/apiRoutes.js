var express = require('express');
var app = express();
var surveyDataObj = require('../data/friends');
var bodyParser = require('body-parser');


module.exports = (app) => {

  //API GET requests; handles when users visit a page; when a link is visited the user is shown a JSON of table data
  app.get('/api/friends', (req, res) => {
    app.use(bodyParser.json());
    // res.json(surveyDataObj);
  });
  //API POST requests; handles when users submit a form and pushes the data to the appropriate array in friends.js
  // user submits form -> server -> data to surveyDataObj array
  app.post('/api/friends', function (req, res) {
    console.log(req.body.scores);//console.log(req.body.people.scores);
    // surveyDataObj.push(req.body.people);
    // res.json(true);
    var acquaintance = req.body;
    acquaintance.route = acquaintance.name.replace(/\s+/g, '').toLowerCase();

    // console.log(`apiRoutes line 34 acquaintance = ${acquaintance}`);
    // console.log(`apiRoutes line 32 acquaintance.name = ${acquaintance.name}`);

  });
  res.json(`this is line 30 apiRoutes surveyDataObj => ${surveyDataObj.people}`);
}



//example from hotrestaurant solved




// app.post("/api/tables", function (req, res) {
  // Note the code here. Our "server" will respond to requests anvar users know if they have a table or not.
  // It will do this by sending out the value "true" have a table
  // req.body is available since we're using the body parsing middleware
//   if (tableData.length < 5) {
//     tableData.push(req.body);
//     res.json(true);
//   }
//   else {
//     waitListData.push(req.body);
//     res.json(false);
//   }
// });

// ---------------------------------------------------------------------------
// I added this below code so you could clear out the table while working with the functionality.
// Don"t worry about it!

// app.post("/api/clear", function (req, res) {
//   // Empty out the arrays of data
//   tableData.length = 0;
//   waitListData.length = 0;

//   res.json({ ok: true });
// });
