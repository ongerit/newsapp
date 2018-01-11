import React from 'react';
import s from './Header.css';
import Navigation from './Navigation'
import {getNews, getSources} from './services/newsapi';

class Header extends React.Component {
  render() {
    return (
      <header className={`${s.header}`} onClick={this.props.getNewsEvent.bind(this)}>
        <div className={`${s.row}`}>
      		<Navigation name="sports" />
      		<Navigation name="entertainment" />
      		<Navigation name="news" />
      		<Navigation name="business" />
        </div>
      </header>
    );
  }
}

export default Header;
