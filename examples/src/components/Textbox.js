import React, { Component, PropTypes } from 'react';
const store = { workTextValue: '' };

var Textbox = React.createClass({
	displayName: 'Textbox',
	getInitialState () {
		return store
	},
	updateValue (e) {
	store.workTextValue = e.target.value;
	this.setState(store);
	window.workTextValue = e.target.value;
	},
	
	render () {
		return (
			<div className="section">
			<input
		 className="Textbox" 
          type="text"
          placeholder="Work..."
		  value={this.state.workTextValue}
          onChange={this.updateValue}
        />				
			</div>
		);
	}
});

module.exports = Textbox;
