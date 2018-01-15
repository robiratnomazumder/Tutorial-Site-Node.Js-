var db = require('./database');

module.exports = {
    insertUser:function(user,callback){
    var query = 'INSERT INTO signup VALUES (null,?,?,?,?,?,?)';
    db.execute(query,[user.name,user.address,user.phone,user.email,user.username,user.password],
    	function(result){
    	callback(result);
    });
   }
}