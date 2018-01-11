import React from 'react';
import s from './Placeholder.css';

class Placeholder extends React.Component {
  render() {
    return (
      <div className={`${s.placeholderContainer}`}>
      	<div className={`${s.contentWrapper}`}>

          <div className={`${s.placeholder}`}>
      	   <div className={`${s.animatedBackground}`}></div>
      	  </div>

          <div className={`${s.placeholderBody}`}>
           <div className={`${s.animatedBackground}`}></div>
          </div>

          <div className={`${s.placeholderBody}`}>
           <div className={`${s.animatedBackground}`}></div>
          </div>
          <div className={`${s.placeholderBody}`}>
           <div className={`${s.animatedBackground}`}></div>
          </div>
      	</div>

      </div>
    )
  }
}

export default Placeholder;
