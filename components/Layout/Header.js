import React from 'react';
import Link from '../Link';
import s from './Header.css';

class Header extends React.Component {

  render() {
    return (
      <header className={`${s.header}`} onClick={this.props.getNewsEvent.bind(this)}>
        <div className={`${s.row}`}>
          <Link className={`mdl-layout-title ${s.title}`} to='/'>
            <span>News</span>
          </Link>
          <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='30' height='30' viewBox='0 0 512 512'>
            <path fill='#fff' d='M376 288c0 70.688-57.312 128-128 128s-128-57.312-128-128c0-65.36 62.672-105.52 128-111.216v79.216l160-112v-16l-160-128v80.672c-117.552 6.912-224 88.976-224 207.328 0 123.712 100.288 224 224 224s224-100.288 224-224h-96z' />
          </svg>
          <div className='mdl-layout-spacer' />
        </div>
      </header>
    );
  }
}

export default Header;
