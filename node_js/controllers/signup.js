var express = require('express');
var router = express.Router();
var signupModel = require.main.require('./models/signup-model'); 

router.get('/', function(request, response){
	//response.send('Hello from Expressjs');
	session = request.session.username;
	if(typeof session != 'undefined'){
    response.redirect('/');
  }
  else{
    response.render('signup');
  }
});


router.post('/', function (req, res) {

     
      req.checkBody('name',"Name is required").isLength({min:2}).trim().isAlpha().withMessage('Name must be alphabet letters.');
      req.checkBody('address', 'Address is required').isLength({ min: 2 });
      req.checkBody('phone', '11 digit phone number is required').isLength({ min: 11}).isLength({ max: 11}).trim().isInt();
      req.checkBody('email', 'Email is required').isEmail();
      req.checkBody('username', 'Username is required').isLength({ min: 2 });
      req.checkBody('password', 'Password is required').isLength({ min: 2 });
      req.checkBody('password2','passwords do not match').equals(req.body.password);

  var errors = req.validationErrors();
  console.log(errors[0]);
  if (errors) {

    //res.send(errors);
    res.render('signup',{error: errors});
  }
  else{
    var user = {};
    user.name = req.body.name;
    user.address = req.body.address;
    user.phone = req.body.phone;
    user.email = req.body.email;
    user.username = req.body.username;
    user.password = req.body.password;

     signupModel.insertUser(user,function(result){
         if(result){
          res.redirect('/signup');
          }
         else{
          res.render('signup',{error: 'error signup'});
         }
     });
  }
    //res.redirect('back');
    //return;
    /*res.render('signup.html', { 
                pageErrors: pageErrors,
                username: userName
            });
*/

 });   
module.exports = router;