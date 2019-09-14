var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var multer  = require('multer');
var upload = multer();
var path = require('path')
var Schema = require("./model.js");

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/profile',
	{ 
		useNewUrlParser: true,
		useUnifiedTopology: true 
	});

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname + '/profile.html'))
})

app.post('/api/save', upload.single('resumeUploaded'), function (req, res) {
	const user = mongoose.model('user_profile', Schema);
	var resume = Buffer.from(req.file+".pdf");
	req.body.resumeUploaded = resume;
	var userData = new user(req.body);
	userData.save(function(err, userData){
		if(err){
			console.log(err);
		}
		res.json(userData);
		
	});		
})

app.listen(3000);
console.log('Running on port 3000');
