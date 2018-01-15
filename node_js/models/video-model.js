var db = require('./database');

module.exports = {

	getAll: function(callback){
		var sql = "SELECT * FROM upload_file";
		db.getResult(sql, null, function(result){

			callback(result);
		});
	},

		

	get: function(catid, callback){




		var sql = "SELECT * FROM upload_file WHERE id=?";
		db.getResult(sql, [catid], function(result){

			callback(result[0]);

		});
	},
	increamentViews :  function(catid, callback){
	    var sql = "SELECT * FROM upload_file WHERE id = ?";
		db.getResult(sql, [catid], function(flag){
			var count = flag[0].views + 1;
			console.log(count);
			console.log('Views: '+count);
			var sql = "UPDATE upload_file SET views = ? WHERE id = ?";
			db.execute(sql,[count, catid],function(result){
				console.log('Result: '+result);
				callback(result);
			});
		});
	   }
	,


		delete: function(catid, callback){
	    var sql = "DELETE FROM upload_file WHERE id=?"
		db.execute(sql, [catid], function(flag){
			callback(flag);
		});
	   }

};

