import { PORT } from './env.js';
import { app } from './app.js';
import './router.js';

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
});
