import { Store, legacy_createStore as createStore } from 'redux';

import { rootReducer } from './reducers/index.js';
import { State } from './types/state.js';

declare global {
  interface Window {
    __PRELOADED_STATE__: State;
  }
}

export const store: Store<State> = createStore(rootReducer, window.__PRELOADED_STATE__);
