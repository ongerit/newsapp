import React from 'react';
import s from './Navigation.css';

class Navigation extends React.Component {
  render() {
    const {item, addNewsData} = this.props;
    return (
        <nav className={`${s.title}`} onClick={(item) => addNewsData(this.props.item.id)}>{item.name}</nav>
    );
  }
}

export default Navigation;
