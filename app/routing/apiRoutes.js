/* Your apiRoutes.js file should contain two routes:

A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
*/

var surveyData = require('../data/friends');

module.exports = function (app) {

  //API GET requests; handles when users visit a page; when a link is visited the user is shown a JSON of table data

  app.get('', (req, res) => {
    res.json(surveyData);
  });

  //API POST requests; handles when users submit a form and pushes the data to the appropriate array in friends.js
  // user submits form -> server -> data to surveyData array

  app.post('', (req, res) => {
    app.get()
  });

}
