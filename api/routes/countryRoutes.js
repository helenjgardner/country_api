'use strict';
module.exports = function (app) {
  var countryAPI = require('../controllers/countryController');

  // API Routes
  app.route('/country/:code')
    .get(countryAPI.list_Country);
};

