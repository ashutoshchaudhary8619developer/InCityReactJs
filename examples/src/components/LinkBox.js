import React from 'react';
var PubSub = global.PubSub || require("../../../PubSubJS/src/pubsub");

var LinkBox = React.createClass({


contextTypes: {
    next: React.PropTypes.object.isRequired,
  },
   	 btnclick() {
		 
	 window.workValue = this.props.heading;
	 
		 var topic = 'hello';
		PubSub.publish( topic, 'from button in parent document' );
		var url = "/" + this.props.heading ;
		
		window.history.pushState("object or string", "Title", url);
	
    },
	
	render () {
		
		return (
		
   <div className="app_col_19_custom" onClick={this.btnclick}  style={{background: this.props.color}}>
      <div className="app_brand_content" onclick="selected_service(2,'Plumbers')">
         <div className="app_service_cover"><img src={this.props.url} className="app_img_width"/>
         </div>
         <div style={{paddingBottom:"0px"}}>
            <h2 className="app_align_center" style={{borderBottom:"none !important",fontSize:"14px !important",paddingBottom:"0px !important",textTransform: "capitalize",}}>{this.props.heading}</h2>
            <p style={{textAlign:"center",fontSize:"12px", }} className="p_descrip">{this.props.desc}</p>
            <div><span className="app_select_btn ">
               <input ng-model="$parent.name" name="name" value="Cleaning" className="btn btn-submit service ng-pristine ng-untouched ng-valid" style={{opacity:"0",}} type="radio"/>
               <span className="app_radio_select" for="radio1" style={{color:"white",fontSize:"18px",}}>
               <span><span></span></span>Select</span></span>
            </div>
         </div>
      </div>
   </div>
   
		
		
		);
	}
});


module.exports = LinkBox;
