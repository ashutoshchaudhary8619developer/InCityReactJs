import React, { Component, PropTypes } from 'react';
const store = { test: 'hello' };


var Emailform = React.createClass({
getInitialState () {
window.store = store;
		return store
	},
 componentWillMount() {
        const script = document.createElement("script");
        script.src = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js";
        script.async = false;
		
		const script2 = document.createElement("script");
        script2.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js";
        script2.async = false;
		
		const script4 = document.createElement("script");
        script4.src = "http://localhost:8000/mail/send_email.js";
        script4.async = false;

		document.body.appendChild(script2);
        document.body.appendChild(script);
		document.body.appendChild(script4);
    },
	

	render () {
	return (	


<div className="panel panel-primary" >
<div className="panel-heading"><h3>Incity Email</h3></div>
<div className="panel-body"  >
<p className="bg-info" id="msg"></p>
 <form className="form-horizontal" role="form" id="emailForm" method="post">
  <div className="form-group">
    <label className="control-label col-sm-2" for="email">Your Email:</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" name="email" placeholder="Enter email" required="required"/>
    </div>
  </div>
  <div className="form-group">
    <label className="control-label col-sm-2" for="subject">Your Name:</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" name="name" placeholder="Enter your name" required="required"/>
    </div>
  </div>
  <div className="form-group-hidden">
    <label className="control-label col-sm-2" for="description">Description:</label>
    <div className="col-sm-10">
      <textarea className="form-control" name="description"

	  value={
	  " I need a " +
window.workValue
+ " in " +
window.cityValue

 + " to do some " +
 
 window.workTextValue

+ " here are some photos at " +

window.areaValue
	  }
	  
	  
	  
	  ></textarea>
	  
    </div>
  </div>
  <div className="form-group">
    <div className="col-sm-offset-2 col-sm-10">
      <button id="send" className="btn btn-primary btn-lg" type="button">
         <span className="glyphicon glyphicon-send" ></span> Send
      </button>
    </div>
  </div>
</form>
</div>
</div>
		);
	}
});

module.exports = Emailform;