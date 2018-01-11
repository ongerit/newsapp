import React from 'react';
import Link from '../Link';
import s from './Header.css';

class Header extends React.Component {

  render() {
    return (
      <header className={`${s.header}`} onClick={this.props.getNewsEvent.bind(this)}>
        <div className={`${s.row}`}>
          <Link className={`mdl-layout-title ${s.title}`} to='/'>
            <span>Sports</span>
            <span>Entertainment</span> 
	    <span>Technology</span>
	    <span>Business</span>
	    <span>Travel</span>
	  </Link>
          <div className='mdl-layout-spacer' />
        </div>
      </header>
    );
  }
}

export default Header;
