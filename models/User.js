var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var orm = require('../db/orm.js');

function User (userObj) {
	this.username = userObj.username
	this.password = userObj.password
}

module.exports = User

module.exports.saveUser = function(userObj, callback){
	orm.addUserToDB(userObj, function(status, err){
		if (err) return callback(false);
		callback(true);
	});
}