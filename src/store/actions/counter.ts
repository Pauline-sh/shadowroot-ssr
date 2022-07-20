export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT = 'counter/DECREMENT';

export function incrementCounter(value: number) {
  return {
    type: INCREMENT,
    value,
  }
}

export function decrementCounter(value: number) {
  return {
    type: DECREMENT,
    value,
  }
}

export type CounterActionType =
  | typeof INCREMENT
  | typeof DECREMENT;

export type CounterAction =
  | ReturnType<typeof incrementCounter>
  | ReturnType<typeof decrementCounter>;

