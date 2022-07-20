import { initialCounterState } from './reducers/counter.js';
import { State } from './types/state.js';

export const INITIAL_STATE: State = {
  counterReducer: initialCounterState,
}
