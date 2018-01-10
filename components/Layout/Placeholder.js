import React from 'react';
import s from './Placeholder.css';

class Placeholder extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    <div>
    	<div class="content-wrapper">
    	  <div class="placeholder">
    	   <div class="animated-background"></div>
    	  </div>
        <div class="placeholder-body">
         <div class="animated-background"></div>
        </div>
        <div class="placeholder-body">
         <div class="animated-background"></div>
        </div>
        <div class="placeholder-body">
         <div class="animated-background"></div>
        </div>
    	</div>

      <div class="content-wrapper">
        <div class="placeholder">
         <div class="animated-background"></div>
        </div>
        <div class="placeholder-body">
         <div class="animated-background"></div>
        </div>
        <div class="placeholder-body">
         <div class="animated-background"></div>
        </div>
        <div class="placeholder-body">
         <div class="animated-background"></div>
        </div>
      </div>

      <div class="content-wrapper">
        <div class="placeholder">
         <div class="animated-background"></div>
        </div>
        <div class="placeholder-body">
         <div class="animated-background"></div>
        </div>
        <div class="placeholder-body">
         <div class="animated-background"></div>
        </div>
        <div class="placeholder-body">
         <div class="animated-background"></div>
        </div>
      </div>
    </div>
  }
}

export default Placeholder;
