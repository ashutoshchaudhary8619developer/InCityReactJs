import React, { Component, PropTypes } from 'react';
var EventEmitterMixin = require('react-event-emitter-mixin');
var PubSub = require("../../../../PubSubJS/src/pubsub");

export default class MultiStep extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showPreviousBtn: false,
      showNextBtn: true,
      compState: 0,
      navState: this.getNavStates(0, this.props.steps.length)
    };
    this.hidden = {
      display: 'none'
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
	window.next = this.next;
	
  }
 

  getNavStates(indx, length) {
    let styles = [];
    for (let i=0; i<length; i++) {
      if(i < indx) {
        styles.push('done')
      }
      else if(i === indx) {
        styles.push('doing')
      }
      else {
        styles.push('todo')
      }
    }
    return { current: indx, styles: styles }
  }

  checkNavState(currentStep){
    if(currentStep > 0 && currentStep !== this.props.steps.length - 1){
      this.setState({
        showPreviousBtn: true,
        showNextBtn: true
      })
    }
    else if(currentStep === 0) {
      this.setState({
        showPreviousBtn: false,
        showNextBtn: true
      })
    }
    else {
      this.setState({
        showPreviousBtn: true,
        showNextBtn: false
      })
    }
  }

  setNavState(next) {
    this.setState({navState: this.getNavStates(next, this.props.steps.length)})
    if (next < this.props.steps.length) {
      this.setState({compState: next})
    }
    this.checkNavState(next);
  }

  handleKeyDown(evt) {
    if (evt.which === 13) {
      this.next()
    }
  }

  handleOnClick(evt) {
    if (evt.target.value === (this.props.steps.length - 1) &&
      this.state.compState === (this.props.steps.length - 1)) {
      this.setNavState(this.props.steps.length)
    }
    else {
      this.setNavState(evt.target.value)
    }
  }

  next(e) {
	  
	  e.preventDefault();
	  this.setNavState(this.state.compState + 1)
  }

  previous(e) {
	  e.preventDefault();
    if (this.state.compState > 0) {
      this.setNavState(this.state.compState - 1)
    }
  }

  getClassName(className, i){
    return className + "-" + this.state.navState.styles[i];
  }

  renderSteps() {
    return this.props.steps.map((s, i)=> (
      <li className={this.getClassName("progtrckr", i)} onClick={this.handleOnClick} key={i} value={i}>
        <em>{i+1}</em>
        <span>{this.props.steps[i].name}</span>
      </li>
    ));
  }
  
getChildContext() {
    return {next: this};
  }
  
    componentWillMount() {
			
		
    // when React renders me, I subscribe to the topic 'products'
    // .subscribe returns a unique token necessary to unsubscribe
	
  var topic = 'hello';
  var objref = this;
  
	PubSub.subscribe( topic, function( topic, data ){
		
		objref.setNavState(objref.state.compState + 1)
		
				});
			
  }
  

				

  render() {

    return (
      <div className="container" onKeyDown={this.handleKeyDown}>
        <ol className="progtrckr">
          {this.renderSteps()}
        </ol>
        {this.props.steps[this.state.compState].component}
        <div style={this.props.showNavigation ? {} : this.hidden}>
          <button style={this.state.showPreviousBtn ? {} : this.hidden}
                  className="multistep__btn--prev"
                  onClick={this.previous}>Previous</button>

          <button style={this.state.showNextBtn ? {} : this.hidden}
                  className="multistep__btn--next"
                  onClick={this.next}>Next</button>
        </div>
      </div>
    );
  }
}

MultiStep.defaultProps = {
  showNavigation: true
};


MultiStep.childContextTypes = {
    next: React.PropTypes.object.isRequired
};
