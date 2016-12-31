'use strict'
import React, { Component, PropTypes } from 'react';

var emailform = React.createClass({
componentWillMount() {
        const script5 = document.createElement("script");
        script5.src = "filepicker/bundle.js";
        script5.async = false;
		
		document.getElementById.appendChild(script5);
    },
	render () {
		return (
		<div id="abc">
		<div class="example">
            <div id="content"></div>
        </div>
			</div>
		);
	}
});




module.exports = emailform;