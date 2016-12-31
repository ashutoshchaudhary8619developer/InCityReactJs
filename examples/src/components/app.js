import Multistep from '../lib/multistep/index.js';
import { steps } from './index.js';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div>
          <Multistep initialStep={1} steps={steps}/>
        </div>
        <div className="container app-footer">
         
        </div>
      </div>
    )
  }
}

export default App;