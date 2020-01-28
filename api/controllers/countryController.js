require('es6-promise').polyfill();
require('isomorphic-fetch');

exports.list_Country = function (req, res) {
  const dataSourceURL = 'https://raw.githubusercontent.com/umpirsky/country-list/master/data/en/country.json';
  fetch(dataSourceURL)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {

      if (myJson[req.params.code]) {
        // returns {"code":"countryname"}
        let obj = {};
        obj[req.params.code] = myJson[req.params.code];
        res.status(200).json(obj)

        // returns alternative {country:"countryname"}
        // res.status(200).json({ 'country': myJson[req.params.code] })
      }
      else res.status(200).json({ 'result' : 'country name not found for ' + req.params.code })
    }
    )
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
    });


};