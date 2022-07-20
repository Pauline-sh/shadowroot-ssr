import { INCREMENT, DECREMENT, CounterAction } from '../actions/counter.js';

export interface CounterState {
  value: number;
}

export const initialCounterState: CounterState = {
  value: 7,
}

export default function counter(state: CounterState = initialCounterState, action: CounterAction) {
  switch (action.type) {
    case INCREMENT:
      return {
        value: state.value + 1,
      };

    case DECREMENT:
      return {
        value: state.value - 1,
      };

    default:
      return state;
  }
}
