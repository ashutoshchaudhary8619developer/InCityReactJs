
var fs = require('fs');
var http=require('http');
var express=require('express');
var nodemailer = require("nodemailer");
var bodyParser = require('body-parser');
var app=express();
var port = Number(process.env.PORT || 5000);



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

// Home page
app.get('/',function(req,res){
    res.sendfile('index.html');
});

// sending mail function
app.post('/send', function(req, res){
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
if(req.body.email == "" || req.body.subject == "") {
  res.send("Error: Email & Subject should not blank");
  return false;
}


// Sending Email Without SMTP
nodemailer.mail({	
    from: req.body.email, // sender address
    to: "ashutosh.chaudhary.8619@gmail.com", // list of receivers
    subject: "enquiry "+req.body.name+" ✔", // Subject line
    //text: "Hello world ✔", // plaintext body
    html: "<b>"+" name: " + req.body.name + "<br/> " + req.body.description+"</b>", // html body
		
});
res.send("Email has been sent successfully");




/*

var transport = nodemailer.createTransport("SMTP", {
    service: "hotmail",
    auth: {
        user: "ashutoshcc@outlook.com",
        pass: "Ashutosh@2016"
    }
});
		
		
        var mailOptions = {
            from: "Node Emailer ✔ <admin@infocitysearch.com>", // sender address
            to: req.body.email, // list of receivers
            subject: req.body.subject+" ✔", // Subject line
            //text: "Hello world ✔", // plaintext body
            html: "<b>"+req.body.description+"</b>", // html body
    
	attachments: [
        {   // file on disk as an attachment
            fileName: "images.jpg",
            filePath: "images.jpg", // stream this file
			
        },
		{   // file on disk as an attachment
            fileName: "images2.jpg",
            filePath: "images2.jpg" // stream this file
        },
		{   // file on disk as an attachment
            fileName: "images3.jpg",
            filePath: "images3.jpg" // stream this file
        },
		{   // file on disk as an attachment
            fileName: "images4.jpg",
            filePath: "images4.jpg" // stream this file
        },
    ],
        }
        smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
             res.send("Email could not sent due to error: "+error);
        }else{
             res.send("Email has been sent successfully");
        } 
    }); 
	
	*/
	
	
});

// Starting server
var server = http.createServer(app).listen(port, function() {
console.log("Listening on " + port);
});
