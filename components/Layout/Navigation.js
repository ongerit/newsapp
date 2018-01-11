import React from 'react';
import s from './Navigation.css';
import {getSCategories} from './services/newsapi';

class Navigation extends React.Component {
  render() {
    const {name} = this.props;
    return (
        <nav className={`${s.title}`}>{name}</nav>
    );
  }
}

export default Navigation;
