import { html } from '../html.js';
import { State } from '../../store/types/state.js';

export function render(state: State) {
  const { value } = state.counterReducer;

  return html`
  <stateful-component>
    <template shadowroot="open">
      <style>
        :host {
          color: brown;
          background-color: antiquewhite;
        }
      </style>

      <div>
        <p>Counter: <span id="counter">${value}</span></p>
      </div>
    </template>
  </stateful-component>
  `;
}
