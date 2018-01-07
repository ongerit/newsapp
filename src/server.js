'use strict'

require('dotenv').config({ silent: true });
const express   = require('express');
const logger    = require('morgan');
const path      = require('path');
const bodyParser = require('body-parser');
const app       = express();
const PORT      = process.argv[2] || 3000;
const newsapi   =require('./services/newsapi');

const apiRouter = require('./routes/newsapilist.js');

app.use(logger('dev'));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api/news', apiRouter);

app.listen(PORT, () => {
  console.log('server is running ', PORT);
});

// app.listen(PORT, () => console.log('server here! listening on', PORT));
app.use((err, req, res, next) => {
  res.status(500).send('Something broke').end(next);
});
