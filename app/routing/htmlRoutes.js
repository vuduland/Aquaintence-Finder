/* Your htmlRoutes.js file should include two routes:

A GET Route to /survey which should display the survey page.
A default, catch-all route that leads to home.html which displays the home page. */

var path = require('path');

//routes:

module.exports = function (app) {

  // HTML GET requests; handles when users visit a page

  app.get('/home', function (req, res) {
    res.send(path.join(__dirname, '../public/home.html'));
  });

  app.get('/survey', function (req, res) {
    res.send(path.join(__dirname, '../public/survey.html'));
  });

  //default

  app.get('*', function (req, res) {
    res.send(path.join(__dirname, '../public/home.html'));
  });

};
