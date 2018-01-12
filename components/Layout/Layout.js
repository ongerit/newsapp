import React, {PropTypes} from 'react';
import {random, find, sampleSize} from 'lodash';
import Header from './Header';
import Footer from '../Footer';
import Item from './Item';
import Placeholder from './Placeholder';
import s from './Layout.css';
import sources from './services/sources.json';
// Placeholder data
import data2 from './services/data.json';
import {getNews, getSources, getCategory} from './services/newsapi';

class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      src: sources,
      news: data2,
      id: '',
      counter: 0
    };
  }

  componentDidMount() {
    this.newsData();
  }

  newsData() {
    getSources().then((e) => {
      let articleIdArray = [];
      // [TO] user alternation to for in
      // https://github.com/airbnb/javascript/issues/851
      for (let item in e) {
        articleIdArray.push(e[item].id);
      }
      let numberOfArticles = e.length;
      let sourceArticle = articleIdArray[random(0, numberOfArticles)];
      this.setState({id: sourceArticle});
      return sourceArticle;
    }).then((source) => {
      getNews(source).then(articles => {
        this.setState({news: articles})
      }).catch(error => console.log(error));
    })
  }

  addNewsData(source) {
    console.log(source);
   getNews(source)
    .then(articles => this.setState({news: articles}))
    .catch(error => console.log(error));
  }

  render() {
    const data = this.state.news;
    const src = this.state.src.sources;
    let newsSource = data.source;

    const navItems = sampleSize(src, 5);

    if (data.status) {
      const newsSource = data.source;
    }

    let src1 = find(src, o => {
      return o.id === newsSource
    });

    return (
      <div className="mdl-layout mdl-js-layout">
        <div className="mdl-layout__inner-container">
          <Header navitems={navItems} addNewsData={this.addNewsData.bind(this)}/>
          <main className={`mdl-layout__content ${s.content}`}>
            <div className={`${s.col}`}>
              <div className={`pp-wrapper ${s.wrapper}`}>
                {data.articles.map((article, i) => <Item origin={newsSource} key={i} article={article} source={src1}/>)}
              </div>
            </div>
            <Footer/>
          </main>
        </div>
      </div>
    );
  }
}

export default Layout;
