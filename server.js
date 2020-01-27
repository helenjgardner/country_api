var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/countryRoutes'); //importing route
routes(app); //register the route
app.listen(port);

console.log('country code RESTful API server started on: ' + port);

// express middleware used to return more interactive messages if the 'route' is incorrect

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});


// resources
// https://www.codementor.io/@olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd