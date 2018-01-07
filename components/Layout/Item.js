import React from 'react';
import moment from 'moment';
import tz from 'moment-timezone';
import s from './Item.css';

class Item extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {

    const article = this.props.article;
    const source = this.props.source;
    const side = this.props.side;

    if(source === undefined) {
      return;
    }

    return (
      <section className={`mdl-layout__item ${s.item} ${side}`} ref={node => (this.root = node)}>
        <div>
          <a title={source.name} href={source.url}><img alt={source.name} className={`${s.logo}`} src={source.urlsToLogos.small} /></a>
          <h6 className={`${s.title}`}>{article.title}</h6>
        </div>
      </section>
    );
  }
}

export default Item;
