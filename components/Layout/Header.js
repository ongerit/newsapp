import React from 'react';
import s from './Header.css';
import Navigation from './Navigation'

class Header extends React.Component {
  render() {
    const {navitems} = this.props;
    return (
      <header className={`${s.header}`}>
        <div className={`${s.row}`}>
          {
            navitems.map(nav=> <Navigation key={nav.id} addNewsData={this.props.addNewsData.bind(this)} item={nav} />)
          }
        </div>
      </header>
    );
  }
}

export default Header;
