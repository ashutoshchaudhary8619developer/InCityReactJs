'use strict'
import React, { Component, PropTypes } from 'react';
import VirtualizedSelect from 'react-virtualized-select';

const DATA = require('../data/cities');



var CitiesField = React.createClass({
	displayName: 'CitiesField',
	getInitialState () {
		return {};
	},
	updateValue (newValue) {
		this.setState({
			selectValue: newValue
		});
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
					value={this.state.selectValue}
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







const store = { checked: false }
 
const StepFour = React.createClass ({
    getInitialState() {
        return store
    },
    
    handleCheckedChanged(event) {
      store.checked = event.target.checked
      this.setState(store)  
    },
    
    render() {
        return (
        <div>
            <div className="row">
                <div className="ten columns terms">
                    <span>By clicking "Accept" I agree that:</span>
                    <ul className="docs-terms">
                        <li>I have read and accepted the <a href="#">User Agreement</a></li>
                        <li>I have read and accepted the <a href="#">Privacy Policy</a></li>
                        <li>I am at least 18 years old</li>
                    </ul>
                    <label><input type="checkbox" 
                                //   defaultChecked={this.state.checked} 
                                  checked={this.state.checked} 
                                  onChange={this.handleCheckedChanged} 
                                  autoFocus/>
                                  <span> Accept </span> </label>
                </div>
            </div>
        </div>
  )}
})

export { StepFour }

