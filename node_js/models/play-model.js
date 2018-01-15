var db = require('./database');

module.exports = {

	getAll: function(callback){
		var sql = "SELECT * FROM upload_file";
		db.getResult(sql, null, function(result){

			callback(result);
		});
	},
get: function (inc, callback) {

var sql1= "UPDATE upload_file SET views = views +1 WHERE id=?";
			db.getResult(sql1, [inc], function(result){

					callback(result[0]);
	
		});
},
		

};

