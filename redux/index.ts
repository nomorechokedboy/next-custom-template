import { createStore, combineReducers, applyMiddleware } from 'redux';
import countReducer from './count/reducer';

const rootReducer = combineReducers({
    count: countReducer,
});

export default createStore(rootReducer);
