


var express = require('express');
var router = express.Router();
var videoModel = require.main.require('./models/video-model');
var playmodel = require.main.require('./models/play-model');


/*router.get('/', function(request, response){
	//response.send('Hello from Expressjs');
	session = request.session.username;
	if(typeof session != 'undefined'){
    response.render('upload');
  }
  else{
    response.redirect('login');
  }
});*/


router.get('/play/:id', function(request, response){
	var catid = request.params.id;
    videoModel.get(catid, function(video){
    	
    		videoModel.increamentViews(catid,function(res){
    			
    			response.render('video/play', video);			
    			
    		});
    	
		
	});
  
	
});

router.get('/delete/:id', function(request, response){
	var catid = request.params.id;
	
	session = request.session.username;
    
	if(typeof session != 'undefined' && session == "admin"){
    videoModel.get(catid, function(video){
		response.render('video/delete', video);
	});
   
    }
	else{
	    response.redirect('/');
	}
	
});

router.get('/del/:id', function(request, response){
	var catid = request.params.id;

     videoModel.delete(catid, function(success){
		if(success)
		{
			response.redirect('/');
		}
		else
		{
			response.send('Error inserting data');
		}
	});
});



module.exports = router;