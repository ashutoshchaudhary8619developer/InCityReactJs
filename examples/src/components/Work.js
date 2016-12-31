'use strict'
import React, { Component, PropTypes } from 'react';
import VirtualizedSelect from 'react-virtualized-select';
const store = { workValue: '' };
window.store = store;

const DATA = require('../data/work');

var WorkField = React.createClass({

	displayName: 'WorkField',
	getInitialState () {
	store.workValue = window.workValue;
	window.store = store;
		return store;
	},
	updateValue (newValue) {
		
		
		
		var url = String(window.location);
		var mystr = url;
		var myarr = mystr.split("/");
		myarr[5]= newValue; 
		console.log(myarr);
		var newurl = myarr.join("/");
		
		
	window.history.pushState("object or string", "Title", newurl);	
	store.workValue = newValue;
	this.setState(store);
	window.workValue = newValue;
	},
	render () {
		var options = DATA.WORK;
		return (
			<div className="section">
				<h3 className="section-heading"></h3>
				<VirtualizedSelect ref="citySelect"
					autofocus
					options={options}
					simpleValue
					clearable
					name="select-work"
					value={this.state.workValue}
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


module.exports = WorkField;
