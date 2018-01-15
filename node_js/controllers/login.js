var express = require('express');
var router = express.Router();
var loginModel = require.main.require('./models/login-model'); 

router.get('/', function(request, response){
	//response.send('Hello from Expressjs');
	session = request.session.username; 
	if(typeof session != 'undefined'){
    response.redirect('/');
  }
  else{
    response.render('login');
  }
	//response.render('login');
});

/* middleware for admin */ 
  router.all('*', function(request, response, next){
    var user = {};
    user.username = request.body.username;
    user.password = request.body.password;
    loginModel.verifyLogin(user,function(result){
   
      if(result && request.body.username == "admin"){
        request.session.username = request.body.username;
        response.redirect('/');
      }
    
    else{
      next();
    }
    
    });
  });
/* middleware for other users and error will detect when wrong username/password */ 

 router.post('/', function(request, response){
       var user = {};
    user.username = request.body.username;
    user.password = request.body.password;
	     loginModel.verifyLogin(user,function(result){
        if(result){
          request.session.username = request.body.username;
        	response.redirect('/');
          }
        else{
        	response.render('login',{error: 'Error: Field(s) are Empty !'});
        }
	  });
  });

/*app.get('/login', function (req, res) {

  session = req.session;
  if(session.uniqueID){
    res.redirect('/redirects');
  }

  res.render('login');
});*/

/*app.get('/',function(req,res){
    res.render('homepage',{data: 'robi'});
});*/

/*app.post('/login',function(req,res) {
  
});*/
module.exports = router;