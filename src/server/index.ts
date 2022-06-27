import {PORT} from './env';
import {getApp} from './app';

(async function main() {
  const app = await getApp();

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  });
})();