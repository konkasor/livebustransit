const express = require('express'),
	app = express(),
	fs = require('fs'),
	url = require('url'),
	mySql = require('mysql'),
	port = process.env.PORT || 5000,
	hostName = 'localhost';

var con = mySql.createConnection({
  host: "sulnwdk5uwjw1r2k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "zjkmgixo5uc7x674",
  password: "q8g7itf4lyccen2a",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.use('/public', express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));
app.use('/scripts', express.static(__dirname + '/node_modules'));

app.get('/', (req, res) => {
	res.type('text/html');

	fs.readFile('views/start.html', (error, data) => {
		if (error) {
			throw error;
		}

		res.send(data);
	});
	
});

app.listen(port);