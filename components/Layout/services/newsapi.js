// const http = require('https');
const fetch = require('node-fetch');

module.exports = {

  getNews: (source) => {
    if (!source) {
      return;
    }
    return fetch(`https://newsapi.org/v1/articles?source=${source}&language=en&apiKey=889e21ffc1c845e89b5ba022d2bb0dc3`)
    .then(res => res.json())
    .then(data => data)
    .catch(rej => console.log('There was an error fetching the data:',rej));
  },

  // Get Category
  // https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=889e21ffc1c845e89b5ba022d2bb0dc3

  getCategory: (category) => {
    if (!category) {
      return;
    }
    return fetch(`https://newsapi.org/v1/sources?category=${category}&language=en&apiKey=889e21ffc1c845e89b5ba022d2bb0dc3`)
    .then(res => res.json())
    .then(data => data)
    .catch(rej => console.log('There was an error fetching the category data:',rej));
  },

  getSources: () => {
    return fetch('https://newsapi.org/v1/sources?language=en')
    .then( res => res.json())
    .then(data => data.sources)
    .catch(rej => console.warn(rej))
  },
}
