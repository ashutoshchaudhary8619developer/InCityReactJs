import React from 'react';
var Photos = React.createClass({
displayName: 'Photos',
 getInitialState: function() {
    return {author: '', text: ''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
	render () {
		return (
			<div className="section">

		<input
		 className="Photos1" 
          type="text"
          placeholder="Work..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
			
			</div>
		);
	}
});


module.exports = Photos;
