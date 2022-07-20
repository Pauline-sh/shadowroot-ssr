import path from 'path';
import express from 'express';

import { app } from './app.js';
import { indexPage } from './views/index.js';

app.use('/static', express.static(path.join('src', 'client', 'dist')));

app.use('/', function (req, res) {
  res.writeHead(200, {
    'content-type': 'text/html;charset=utf-8'
  });
  res.write(indexPage);
  res.end();
});
