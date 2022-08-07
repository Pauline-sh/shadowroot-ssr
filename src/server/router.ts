import { Readable } from 'stream';
import path from 'path';
import express from 'express';

import { app } from './app.js';
import { indexPage } from './views/index.js';

app.use('/static', express.static(path.join('src', 'client', 'dist')));

app.get('/test', async (req, res) => {
  const stream = new Readable({ read() { } });
  stream.setEncoding('utf8');
  stream.push(indexPage);

  res.writeHead(200, {
    'content-type': 'text/html;charset=utf-8',
    'transfer-Encoding': 'chunked',
  });

  stream.on('data', (data) => {
    console.log(data);
    res.write(data, 'utf8');
  })

  stream.on('end', () => {
    res.end();
  })
});

app.use('/', function (req, res) {
  res.writeHead(200, {
    'content-type': 'text/html;charset=utf-8'
  });
  // const stream = new Readable();
  // stream.push
  // src.pipe(res);
  res.write(indexPage);
  res.end();
});
