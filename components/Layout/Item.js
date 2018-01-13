import React from 'react';
import moment from 'moment';
import tz from 'moment-timezone';
import s from './Item.css';
import Placeholder from './Placeholder';
import {textTruncate} from './util/helper';

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
    let backgroundImg = article.urlToImage || '';

    if (source === undefined) {
      return
    }

    return (
        <section style={{
          backgroundImage: `url(${backgroundImg})`
        }} className={`mdl-layout__item ${s.item}`} ref={node => (this.root = node)}>
            { article.type === 'fill'
              ? <Placeholder />
              : <div><a title={source.name} href={source.url}>{source.name}</a>
                <a href={article.url} title={source.description} target="_blank">
                  <h6 className={`${s.title}`}>{textTruncate(article.title)}</h6>
                </a>
              </div>
            }
        </section>
    );
  }
}

export default Item;
