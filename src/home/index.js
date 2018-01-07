import React, {PropTypes} from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import {title, html} from './index.md';

class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape(
      {
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired}).isRequired).isRequired
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <div // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
          __html: html
        }}/>
        <h4>Articles</h4>
        <ul>
          { this.props.articles 
	    ? this.props.articles.map(article => <li key={article.url}>
            <a href={article.url}>{article.title}</a>
            by {article.author}</li>,)
	    : ''
	  }
        </ul>
        <p>
          <br/><br/>
        </p>
      </Layout>
    );
  }
}

export default HomePage;
