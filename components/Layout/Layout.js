import React, { PropTypes } from 'react';
import _ from 'lodash';
import Header from './Header';
import Footer from '../Footer';
import Item from './Item';
import s from './Layout.css';
import sources from './services/sources.json';
import data2 from './services/data.json';
import { getNews, getSources } from './services/newsapi';

class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      src: sources,
      news: data2,
      id: '',
      counter: 0,
    };
    // init
    this.newsData();
  }

  componentWillMount() {
    //this.newsData();
  }

  removeNewselements(){
    const articlesTotalEndpoint = 2;
    const element = this.state.newsA.articles;
    let updateNew = element.slice(0, -1);
    let updateNews = Object.assign({}, this.state.news, {articles:updateNew});
    this.setState({news:updateNews});
    // [TO] add new articles once
    // list of articles is less than 2

    if(element.length < articlesTotalEndpoint ) {
      this.newsData();
    }
  }

  newsData() {
    getSources().then((e) => {
      let articleIdArray = [];
      // [TO] user alternation to for in
      // https://github.com/airbnb/javascript/issues/851
      for(let item in e) {
        articleIdArray.push(e[item].id);
      }
      let numberOfArticles = e.length;
      let sourceArticle = articleIdArray[_.random(0, numberOfArticles)];
      this.setState({ id: sourceArticle });
      return sourceArticle;   
    }).then( (source) => {
	getNews(source)
         .then(articles => { console.log(articles); this.setState({ news: articles })})
         .catch(error => console.log(error));
    })
  }

  render() {
    const data = this.state.news;
    const src = this.state.src.sources;
    const origin = data.source;
    
   if(data.status === undefined) {
      this.newsData;
      return
    }

    let src1 = _.find(src, (o) => { return o.id === origin});

    return (
      <div className="mdl-layout mdl-js-layout">
        <div className="mdl-layout__inner-container">
          <Header getNewsEvent={this.removeNewselements.bind(this)} />
          <main className={`mdl-layout__content ${s.content}`}>
            <div className={`${s.col}`}>
              <div className={`pp-wrapper ${s.wrapper}`}>
                {data.articles.map((article, i) => {
                  return (<Item origin={origin} key = {i}  article={article} source={src1} />);
                })}
              </div>
              </div>
            <Footer />
          </main>
        </div>
      </div>
    );
  }
}

export default Layout;
