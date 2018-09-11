var express = require('express');
var app = express();
var morgan = require('morgan');
var authUser = require('./app/services/authService');
const PORT = process.env.PORT || 3000

//var mongoose = require('mongoose');

//var React = require('react');
//var ReactDOMServer = require('react-dom/server');
//var mainPage = require('./mainPage.jsx');

var config = require('./config/config');

//mongoose.connect(config.db.uri);

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response) {
        response.sendfile('./public/index.html')
});
/*
app.get('/auth', function (request, response) {
        response.send(request.query.code);
});
*/

app.get('/auth', authUser);
app.get('/login', function (request, response) {
        response.redirect(config.instagram.auth_url);
});

app.get('/igProfile', function (request, response) {
    response.sendfile('./public/igProfile.html');

/*
  	var html = ReactDOMServer.renderToString(
                React.createElement(mainPage)
        );
	response.send('html');
*/
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));