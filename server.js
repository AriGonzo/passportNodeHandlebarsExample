var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var PORT = 8080;

//Handlebars-------------------------------------------------------
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//-----------------------------------------------------------------

//Middleware-------------------------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(express.static('public'));
//-----------------------------------------------------------------


//Routes-----------------------------------------------------------
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);
//-----------------------------------------------------------------

app.listen(PORT, function(){
	console.log('listening on port', PORT)
});
