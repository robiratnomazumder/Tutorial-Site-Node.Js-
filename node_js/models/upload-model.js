var db = require('./database');

module.exports = {
    insertUser:function(upload,callback){
    var query = 'INSERT INTO upload_file VALUES (null,?,?,?,?)';
    db.execute(query,[upload.name,upload.description,upload.type,'0'],
    	function(result){
    	callback(result);
    });
   },

      getAll:function(callback){
    var query = 'SELECT * FROM upload_file ORDER BY views DESC';
    db.getResult(query, null, function(result){
			callback(result);
		});
   }

};	
