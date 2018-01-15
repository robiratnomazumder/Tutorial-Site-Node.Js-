process.env.PWD = process.cwd()
var express = require('express');
var validator = require('express-validator');
var bodyParser = require('body-parser');
var sessions = require('express-session');

var login = require('./controllers/login');
var signup = require('./controllers/signup');
var upload = require('./controllers/upload');

var uploadModel = require.main.require('./models/upload-model'); 
var video = require('./controllers/video');


// At the top of your server.js


// Then

var session;

var app = express();



app.use(express.static(process.env.PWD + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(sessions({
  secret: 'sdfsdfsddf',
  resave: false,
  saveUninitialized: true
}));
/*app.use('/cssFiles',express.static(__dirname + '/assets'));*/
app.set('view engine', 'ejs');
/*
app.get('/', function (req, res) {
  //res.render('homepage');
  //res.render('homepage',{data: ''});
  //res.sendFile('this is contact page')
});*/


//middleware
app.use('/login', login);
app.use('/signup', signup);
app.use('/upload', upload);
app.use('/video', video);
//app.use('/video/delete', video);

app.get('/',function(request,res){
  username = request.session.username;
 // console.log(session);
  if(typeof session != 'undefined'){
    uploadModel.getAll(function(result){
      res.render('homepage', {catList: result, data:'ss', session: username});
     
     });
  }

  else{
    /* if(username == "admin"){
       uploadModel.getAll(function(result){
       res.render('video/delete', {catList: result});
        });
      }
     else{*/
       uploadModel.getAll(function(result){
       res.render('homepage', {catList: result});
        });
    // }

    // res.render('page');
  }

});

/*app.get('/page',function(request,res){
  session = request.session.username;
  if(typeof session != 'undefined'){
  res.render('page',{data:'something'});
  uploadModel.getAll(function(result){
  res.render('page', {catList: result});
  });

  }
  else{
    res.render('page');
  }
});*/



app.get('/logout',function(req,res){
  req.session.destroy();
  res.redirect('/');
});

/*app.get('/redirects', function (req, res) {
   session = req.session;
   if(session){
    //console.log(session.uniqueID);
    res.redirect('/homepage');
   }
   else{
    //res.send(req.session.uniqueID + 'not found <a href="/logout"> Logout</a>');
   }
});*/



/*app.get('/', function(request, response){
 
});*/



app.listen(3000,function(){
   console.log('server');
});



