import path from 'path';
import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import {router} from './router/routes/index.js';

export const app = express();

app.use(logger('dev'));
app.use(helmet());
app.use(helmet.contentSecurityPolicy({
  directives: {
    'script-src': ["'self'"],
    'style-src': ["'self'"],
  },
}));
app.use(express.static(path.join('src', 'client')));
app.use(router);