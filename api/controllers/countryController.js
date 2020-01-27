require('es6-promise').polyfill();
require('isomorphic-fetch');

exports.list_Country = function (req, res) {
   const dataSourceURL='https://raw.githubusercontent.com/umpirsky/country-list/master/data/en/country.json';
   fetch(dataSourceURL)
   .then((response) => {
           return response.json();
    })
    .then((myJson) => {
        res.json({ 'country': myJson[req.params.code] })
    }
  );
};