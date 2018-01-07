// const http = require('https');
const fetch = require('node-fetch');

module.exports = {

  getNews: (source) => {
    if (!source) {
      return;
    }

    const fetchMethod = {
      method: 'GET',
      hostname: 'newsapi.org',
      path: `/v1/articles?source=${source}&language=en&apiKey=889e21ffc1c845e89b5ba022d2bb0dc3`,
    };

    return fetch(`//newsapi.org/v1/articles?source=${source}&language=en&apiKey=889e21ffc1c845e89b5ba022d2bb0dc3`, fetchMethod)
    .then((res) => {
      const data = res.json();
      return data;
    })
    .then((data) => {
      if ( data.status !== 'ok') {
        return
      }
      return data;
    })
    .catch((rej) => {
      return rej;
    });
  },

  getSources: () => {
    const fetchMethod = {
      method: 'GET',
      hostname: 'newsapi.org',
      path: '/v1/sources?language=en',
    };

    return fetch('http://newsapi.org/v1/sources?language=en', fetchMethod)
    .then( (res) => {
      // [TO] Grap json data and store it as a constant.
      const data = res.json();
      return data;
    })
    .then((data) => {
      if (data.status === 'ok') {
        return data.sources;
      }
    })
    .catch((rej) => {
      return rej;
    });
  },
};
