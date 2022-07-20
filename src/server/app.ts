import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';

export const app: express.Express = express();

app.use(logger('dev'));
app.use(helmet());
app.use(helmet.contentSecurityPolicy({
  directives: {
    'script-src': ["'self'", "'unsafe-inline'"],
    'style-src': ["'self'", "'unsafe-inline'"],
  },
}));
