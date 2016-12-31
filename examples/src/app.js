/* eslint react/prop-types: 0 */
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import Contributors from './components/Contributors';
import CustomComponents from './components/CustomComponents';
import CustomRender from './components/CustomRender';
import NumericSelect from './components/NumericSelect';
import Cities from './components/Cities';
import States from './components/States';
import LinkBox from './components/LinkBox';
import Work from './components/Work';
import Area from './components/Area';
import Emailform from './components/EmailForm';
import Photos from './components/Photos';
import Textbox from './components/Textbox';
import Popup from './components/Popup';
import App from './components/app';


ReactDOM.render(
	<div><a><img className="main_header" src={'images/logo2.png'}/></a></div>,
	document.getElementById('page-header')
	
);


ReactDOM.render(<App/>, document.getElementById("app"));




