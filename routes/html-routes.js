var orm = require('../db/orm.js');
var passport = require('passport');

module.exports = function(app){

	app.get('/', function(req, res){
		res.render('index', {
			welcomeText: "Sign In",
			actionBtn: 'signin'
		});
	});

	app.get('/signup', function(req, res){
		res.render('index', {
			welcomeText: "Sign Up",
			actionBtn: 'signup'
		});
	});

	app.post('/signin', function(req, res){
		res.sendStatus(200)
	});

	app.post('/signup', function(req, res){
		res.sendStatus(200)
	});

};