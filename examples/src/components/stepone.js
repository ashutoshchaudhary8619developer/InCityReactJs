'use strict'
import React, { Component, PropTypes } from 'react';
import LinkBox from './LinkBox';

const store = { firstName: '', lastName: '' };


const StepOne = React.createClass ({

    getInitialState() {
        return store
    },
	
    handlefirstname(event) {
      store.firstName = event.target.value
      this.setState(store)  
    }, 
    
    handleLastNameChanged(event) {
      store.lastName = event.target.value
      this.setState(store)  
    },
	
    render() {
	
	var style1 = {
      color: 'blue',
      fontSize: 200
    };
	
	
        return (
        <div>
           
		   

	<div>
	<h2>
	
	Hire Verified incity Service Provider
	
	</h2>
	
	<div className="app_card">
	
	<div className="app_custom_row" id="main_services_div">
	
	
	<div className="adjust">
	<div className="front_adjust">
	
	<LinkBox  color="#00ccff" url="images/Cleaners-Photo.png" heading="Cleaners" desc="Cleaning Services at your doorstep"/>
	
	
	<LinkBox color="#ffbf00" url="images/1.png" heading="Plumbers" desc="Plumber is just a call away"/>
	
	
	
	<LinkBox color="#00ff80" url="images/4.png" heading="Movers and Packers" desc="Get your house shifted without any stress"/>
	
	
	
	<LinkBox color="#00ccff" url="images/electricity_new.png" heading="Electricians" desc="Electrician is just a call away from you"/>
	
	
	
	<LinkBox color="#ffbf00" url="images/5.png" heading="Car Washers" desc="Get your car clean in your location"/>
	
	
	
	<LinkBox color="#00ff80" url="images/carpenter_new.png" heading="Carpenters" desc="Best wooden work at your home"/>
	
	
	
	<LinkBox color="#00ccff" url="images/9.png" heading="Painters" desc="Painter is just a call away from you"/>
	
	
	
	<LinkBox color="#ffbf00" url="images/lawn-movers.png" heading="Lawn Mowers" desc="Lawn Mower at your doorstep"/>
	
	
	
	<LinkBox color="#00ff80" url="images/teachers.png" heading="Tutors" desc="Tutors Services at your doorstep"/>
	
	
	
	<LinkBox color="#00ccff" url="images/mason_new.png" heading="Mason" desc="Raj Mistri at your disposal"/>
	
	
	
	<LinkBox color="#ffbf00" url="images/beauty.png" heading="Beautician" desc="Beauty expert at your doorstep"/>
	
	
	
	<LinkBox color="#00ff80" url="images/Labour-Photo.png" heading="Labour" desc="Labour just a call away"/>
	
	
	
	
	<LinkBox color="#00ccff" url="images/ac-service-icon.png" heading="AC Service" desc="Looking for professional AC Repair and Service"/>
	
	</div>
	</div>
	
	
	</div>
	</div>
	
	</div>
	

		   
        </div>
		
		
    )}
	
	
	
	
	
	
})

export { StepOne }
