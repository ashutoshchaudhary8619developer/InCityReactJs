'use strict'
import React, { Component, PropTypes } from 'react';
import Work from './Work';
import Area from './Area';
import Textbox from './Textbox';
import Cities from './Cities';
import Popup from './Popup';


const store = { email: '', emailConfirm: '' }

const StepTwo = React.createClass ({
    getInitialState() {
        return store
    },
    
    handleEmailChanged(event) {
      store.email = event.target.value
      this.setState(store)  
    },
    
    handleEmailConfirmChanged(event) {
      store.emailConfirm = event.target.value
      this.setState(store)  
    },

    render() {
        return (		
		
		
        <div id="info_box">
            
			<h5>I need a</h5>
<div id="work"><Work /></div>
  
<h5>in</h5>

<div id="cities"><Cities /></div>
 
 
<h5>to do some </h5>

 <div id="TextBox">  <Textbox /> </div>
 


<h5>at</h5>

 <div id="area"> <Area /> </div>
			
        </div>
	
		
    )}
})

export { StepTwo }