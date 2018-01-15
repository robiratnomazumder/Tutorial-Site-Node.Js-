var db = require('./database');

module.exports = {
    verifyLogin:function(login,callback){
    var query = "SELECT * FROM signup WHERE username = ? AND password = ?";
    db.getResult(query,[login.username,login.password],function(result){
    	if(result.length == 1){
           callback(true);
    	}
    	else{
    		callback(false);
    	}
    });
   }
}