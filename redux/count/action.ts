import { ReduxAction } from '../types';

export const SET_COUNT = 'SET_COUNT';

export type CountAction = ReduxAction<number>;

export const setCount = (count: number): CountAction => ({
    type: SET_COUNT,
    payload: count,
});

export const selectCount = (state: any) => state.count;
