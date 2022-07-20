import { html } from '../../../common/html.js';
import { State } from '../../../store/types/state.js';

export function renderPage(
  state: State,
  bodyContent: string,
) {
  return html`
  <!DOCTYPE html>
  <html>
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Shadowroot SSR</title>
    <link rel="stylesheet" type="text/css" href="static/normalize.css">
    <script src="static/process_shadow_roots.js"></script>
  </head>
  
  <body>
    ${bodyContent}
    <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')}
    </script>
    <script src="static/bundle.js"></script>
  </body>
  
  </html>
  `;
}
