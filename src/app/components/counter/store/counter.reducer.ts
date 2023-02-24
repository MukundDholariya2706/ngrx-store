import { CounterState, initialState } from './counter.state';
import { Action, createReducer, on, State } from '@ngrx/store';

import * as Counter from './counter.actions';

const _counterReducer = createReducer(
    initialState,
    on(Counter.increment, (state) => {
        return {
            ...state,
            counter:  state.counter + 1
        }
    }),
    on(Counter.decrement, (state) => {
        return {
            ...state,
            counter:  state.counter - 1
        }
    }),
    on(Counter.reset, (state) => {
        return {
            ...state,
            counter: 0
        }
    })
);

export function counterReducer(state: CounterState, action: Action) {
    return _counterReducer(state, action);
}