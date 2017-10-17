var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
import db from './db/index.js'
import connectMongo from 'connect-mongo';
import routes from "./routes/index.js"
app.use(session({
	secret: 'shixinke',
	resave: true,
	saveUninitialized: false,
	cookie: {
		secure: false
	}
}));
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static('./public'));
app.all('*', (req, res, next) => {
	res.header("Access-Control-Allow-Origin", req.headers.origin || '*');
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  	res.header("Access-Control-Allow-Credentials", true); //可以带cookies
	res.header("X-Powered-By", '3.2.1')
	if (req.method == 'OPTIONS') {
	  	res.send(200);
	} else {
	    next();
	}
});
routes(app);

app.listen(8000)