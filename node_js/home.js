var express = require('express');
//var app = express();
var router = express.Router();

router.get('/', function(request, response){
	//response.send('<h2>aksdgahsldkh</h2>');
	var data = {
		name: 'NODE.JS',
		version: '9.3.0',
		release: {
			date: {
				day: 11,
				month: 11,
				year: 2017
			},
			url: 'wwww.example.com'
		}
	};
	console.log('response from home module');
	response.render('home', data);
});

module.exports = router;