import { CountAction, SET_COUNT } from './action';

export default function countReducer(count = 0, action: CountAction) {
    switch (action.type) {
        case SET_COUNT:
            return action.payload;
        default:
            return count;
    }
}
