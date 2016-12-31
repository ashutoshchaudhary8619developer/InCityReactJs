'use strict'
import React, { Component, PropTypes } from 'react'
import Emailform from './EmailForm';

const store = { password: '123', passwordConfirm: '' }

const StepThree = React.createClass ({
    getInitialState() {
        return store
    },
    
    handlePasswordChanged(event) {
      store.password = event.target.value
      this.setState(store)  
    },
    
    handlePasswordConfirmChanged(event) {
      store.passwordConfirm = event.target.value
      this.setState(store)  
    },

    render() {
        return (
           <div>
		<Emailform/>
	</div>
			
			
    )}
})

export { StepThree }