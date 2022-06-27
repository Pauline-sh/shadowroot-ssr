import express from 'express';
import logger from 'morgan';
import path from 'path';
const helmetImport = import('helmet');

export const getApp = async () => {
  const helmet = (await helmetImport).default;
  const app = express();

  app.use(logger('dev'));
  app.use(helmet());
  app.use(helmet.contentSecurityPolicy({
    directives: {
      'script-src': ["'self'"],
      'style-src': ["'self'"],
    },
  }));

  app.use(express.static(path.join('src', 'client')));

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'client', 'index.html'));
  });

  return app;
};
