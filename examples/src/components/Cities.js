import React, { Component, PropTypes } from 'react';
import VirtualizedSelect from 'react-virtualized-select';
const store = { cityValue: '' };

const DATA = require('../data/cities');

var CitiesField = React.createClass({
	getInitialState () {
		return store;
		window.store = store;
	},
	updateValue (newValue) {
		
		var url = String(window.location);
		var mystr = url;
		var myarr = mystr.split("/");
		myarr[3]= newValue; 
		console.log(myarr);
		var newurl = myarr.join("/");
		
		
	var url =  newValue ;
	window.history.pushState("object or string", "Title", newurl);	
		
	store.cityValue = newValue;
	this.setState(store);
	window.cityValue = newValue;
	},
	render () {
		var options = DATA.CITIES;
		return (
			<div className="section">
				<h3 className="section-heading"></h3>
				<VirtualizedSelect ref="citySelect"
					autofocus
					options={options}
					simpleValue
					clearable
					name="select-city"
					value={this.state.cityValue}
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


module.exports = CitiesField;
