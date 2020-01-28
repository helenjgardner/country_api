exports.list_Country = function (req, res) {
  var fs = require('fs');
  try {
    const data = fs.readFileSync('/home/heleng/Documents/iso_api/data/country.json', 'utf8')
    const jsonObj = JSON.parse(data);
    if (jsonObj[req.params.code]) {
      let obj = {};
      obj[req.params.code] = jsonObj[req.params.code];
      res.status(200).json(obj)
    }
    else res.status(200).json({ 'result': 'country name not found for ' + req.params.code })
  } catch (err) {
    console.error(err)
  }

  // ****************************************************************
  // this code doesn't use the fs library, instead it uses the fetch api, results are the same
  // ****************************************************************
  // require('es6-promise').polyfill();
  // require('isomorphic-fetch');
  // const dataSourceURL = 'https://raw.githubusercontent.com/umpirsky/country-list/master/data/en/country.json';
  // fetch(dataSourceURL)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((myJson) => {

  //     if (myJson[req.params.code]) {
  //       // returns {"code":"countryname"}
  //       let obj = {};
  //       obj[req.params.code] = myJson[req.params.code];
  //       res.status(200).json(obj)

  //       // returns alternative {country:"countryname"}
  //       // res.status(200).json({ 'country': myJson[req.params.code] })
  //     }
  //     else res.status(200).json({ 'result': 'country name not found for ' + req.params.code })
  //   }
  //   )
  //   .catch(function (err) {
  //     console.log('Fetch Error :-S', err);
  //   });


};