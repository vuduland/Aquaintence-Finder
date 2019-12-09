/* Your apiRoutes.js file should contain two routes:

A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

*/
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let surveyDataObj = require('../data/friends');




module.exports = function (app) {

  //API GET requests; handles when users visit a page; when a link is visited the user is shown a JSON of table data

  app.get('/api/friends', (req, res) => {
    app.use(bodyParser.json());
    // res.json(surveyDataObj);
  });

  //API POST requests; handles when users submit a form and pushes the data to the appropriate array in friends.js
  // user submits form -> server -> data to surveyDataObj array

  app.post('/api/friends', (req, res) => {
    console.log(req.body.people.scores)
    surveyDataObj.push(req.body.people);
    // res.json(true);
    var acquaintance = req.body;
    acquaintance.route = acquaintance.people.name.replace(/\s+/g, '').toLowerCase();

    console.log(`apiRoutes line 34 acquaintance = ${acquaintance}`);
    console.log(`apiRoutes line 32 acquaintance.name = ${acquaintance.name}`);

  });

}


//example from hotrestaurant solved




app.post("/api/tables", function (req, res) {
  // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
  // It will do this by sending out the value "true" have a table
  // req.body is available since we're using the body parsing middleware
  if (tableData.length < 5) {
    tableData.push(req.body);
    res.json(true);
  }
  else {
    waitListData.push(req.body);
    res.json(false);
  }
});

// ---------------------------------------------------------------------------
// I added this below code so you could clear out the table while working with the functionality.
// Don"t worry about it!

app.post("/api/clear", function (req, res) {
  // Empty out the arrays of data
  tableData.length = 0;
  waitListData.length = 0;

  res.json({ ok: true });
});
