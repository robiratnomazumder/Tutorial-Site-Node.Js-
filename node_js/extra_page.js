
app.get('/logout',function(req,res){
  req.session.destroy();
  res.redirect('/');
});

app.get('/admin', function (req, res) {
  session = req.session;
  if(session.uniqueID){
    //res.setHeader('content-type','text/html');
    res.redirect('/admin');
    res.send('Welcome !! <br> <a href="/logout"> Logout</a>');
  }
  else{
    res.redirect('/login');
  } 
  });

app.get('/redirects', function (req, res) {
   session = req.session;
   if(session.uniqueID){
    console.log(session.uniqueID);
    res.redirect('/admin');
   }
   else{
    res.send(req.session.uniqueID + 'not found <a href="/logout"> Logout</a>');
   }
});
app.get('/signup', function (req, res) {
  session = req.session;
  if(session.uniqueID){
    res.redirect('/redirects');
  }
  res.sendFile('./views/signup.html',{root: __dirname});
});


app.get('/sql',function(req,res){
});
//exports.register = function(req,res){
  // console.log("req",req.body);
  app.post('/signup', function (req, res) {

      req.checkBody('name',"Name is required").isLength({min:2}).trim().isAlpha().withMessage('Name must be alphabet letters.');

      req.checkBody('address', 'Address is required').isLength({ min: 2 });
      req.checkBody('phone', '11 digit phone number is required').isLength({ min: 11}).isLength({ max: 11}).trim().isInt();
      req.checkBody('email', 'Email is required').isEmail();
      req.checkBody('username', 'Username is required').isLength({ min: 2 });
      req.checkBody('password', 'Password is required').isLength({ min: 2 });
      req.checkBody('password2','passwords do not match').equals(req.body.password);

  var errors = req.validationErrors();

  if (errors) {
    res.send(errors);
    //res.redirect('back');
    //return;
    /*res.render('signup.html', { 
                pageErrors: pageErrors,
                username: userName
            });
*/
  }
  else{

      var today = new Date();
      var users={
        "name":req.body.name,
        "address":req.body.address,
        "phone":req.body.phone,
        "email":req.body.email,
        "username":req.body.username,
        "password":req.body.password
  }
  connection.query('INSERT INTO signup SET ?',users, function (error, results, fields) {
  if (error){
      console.log("error ocurred",error);
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
  }
  else{
      console.log('The solution is: ', results);
      res.send({
        "code":200,
        "success":"user registered sucessfully"
       });
     }
   });
  }
});
