import path from 'path';
import express from 'express';

export const router: express.Router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'client', 'index.html'));
});