import React from 'react';
import SkyLight from 'react-skylight';

var Popup = React.createClass({
	displayName: 'Popup',
	 showobj: function(e) {
	 e.preventDefault();
       this.refs.simpleDialog.show();
	   
    },

	render () {
		return (
			 <div>
        <section>
          <button onClick={this.showobj}><img src={"images/file_upload.png"}></img></button>
        </section>
		
        <SkyLight hideOnOverlayClicked ref="simpleDialog" title="Upload the images">
		<div >
		 <div className='example'>
            <div id='content'>
			</div>
        </div>
		<script src={'filepicker/bundle.js'}></script>
		</div>
		
        </SkyLight>
      </div>
		);
	}
});



export default Popup;