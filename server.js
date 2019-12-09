const express = require('express');
const path = require('path');

// create express server and initial port/listener:

const app = express();
const PORT = process.env.PORT || 8080;

// sets up data parsing on express server:

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router:

// works; must fill in routes to have the below

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// start server:

app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});

