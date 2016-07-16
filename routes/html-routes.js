var UserModel = require('../models/User.js');
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
		
	});

	app.post('/signup', function(req, res){
		var user = new UserModel(req.body);
		UserModel.saveUser(user, function(status){
			if(!status) {
				res.json({redirect: '/signup'})
				return false
			}
			res.json({redirect: '/'});
		});
		
	});

};