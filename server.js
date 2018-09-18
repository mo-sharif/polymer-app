var express = require('express');
var app = express();
var morgan = require('morgan');
var authUser = require('./app/services/authService');
const PORT = process.env.PORT || 3000

var mongoose = require('mongoose');


var config = require('./config/config');
//mongoose.connect('mongodb://user_of_themonth:jagsohwell2018@ds261342.mlab.com:61342/promania');

mongoose.connect(config.db.uri);

app.use(morgan('dev'));

app.use(express.static('public'));

app.get('/', function (request, response) {
        response.sendfile('./public/index.html')
});

app.get('/auth', authUser);
app.get('/login', function (request, response) {
        response.redirect(config.instagram.auth_url);
});

app.get('/igProfile', function (request, response) {
    response.sendfile('./public/igProfile.html');

});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));