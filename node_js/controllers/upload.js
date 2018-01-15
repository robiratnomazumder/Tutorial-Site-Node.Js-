var express = require('express');
var router = express.Router();
const fileUpload = require('express-fileupload');


var uploadModel = require.main.require('./models/upload-model'); 


router.get('/', function(request, response){
	//response.send('Hello from Expressjs');
	session = request.session.username;
	if(typeof session != 'undefined'){
    response.render('upload');
  }
  else{
    response.redirect('login');
  }
});


router.post('/', function (req, res) {

     
      req.checkBody('name',"File Name is required").isLength({min:2});
      req.checkBody('description', 'Description is required').isLength({ min: 2 });
      req.checkBody('type', 'Type is required').isLength({ min: 2});

  var errors = req.validationErrors();
  //console.log(errors[0]);
  if (errors) {

    //res.send(errors);
    res.render('upload',{error: errors});
  }
  else{
    var user = {};
    user.name = req.body.name;
    user.description = req.body.description;
    user.type = req.body.type;

     uploadModel.insertUser(user,function(result){
         if(result){
          res.redirect('/');
          }
         else{
          res.render('upload',{error: 'error upload'});
         }
     });
  }
     });



// default options
/*router.use(fileUpload());
 
router.post('/', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;
 
  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('uploads/', function(err) {
    if (err)
      return res.send(sampleFile.name);
    res.send('File uploaded!');
  });
});*/



    //res.redirect('back');
    //return;
    /*res.render('signup.html', { 
                pageErrors: pageErrors,
                username: userName
            });
*/

 




/*router.get('/', function(request, response){
       
    connection.query('SELECT * FROM users', function(err, result) {

        if(err){
            throw err;
        } else {
            obj = {print: result};
            res.render('print', obj);                
        }
    });

});*/

module.exports = router;