'use strict'
import React, { Component, PropTypes } from 'react';
import VirtualizedSelect from 'react-virtualized-select';
const store = { areaValue: '' };

const DATA = require('../data/location');

var Area = React.createClass({
	displayName: 'Area',
	getInitialState () {
		return store
	},
	updateValue (newValue) {
		
		var url = String(window.location);
		var mystr = url;
		var myarr = mystr.split("/");
		myarr[4]=newValue; 
		console.log(myarr);
		var newurl = myarr.join("/");
		
		
	window.history.pushState("object or string", "Title", newurl);	
	store.areaValue = newValue;
	this.setState(store);
	window.areaValue = newValue;
	},
	render () {
		var options = DATA.LOCATION;
		return (
			<div className="section">
				<h3 className="section-heading"></h3>
				<VirtualizedSelect ref="citySelect"
					autofocus
					options={options}
					simpleValue
					clearable
					name="select-Area"
					value={this.state.areaValue}
					onChange={this.updateValue}
					searchable
					labelKey="name"
					valueKey="name"
				/>
				<div className="hint">
					 
				</div>
			</div>
		);
	}
});


module.exports = Area;
