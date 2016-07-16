var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var orm = require('../db/orm.js');

function User (userObj) {
	this.username = userObj.username
	this.password = userObj.password
}

module.exports = User

//Passport---------------------------------------------------------

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

//-----------------------------------------------------------------

module.exports.comparePassword = function(userObj){

	
}


module.exports.saveUser = function(userObj, callback){
	orm.addUserToDB(userObj, function(status, err){
		if (err) return callback(false);
		callback(true);
	});
}

// this.comparePassword = function(){

// }

// this.findUser = function(){

// }