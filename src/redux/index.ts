import {createStore, combineReducers, Reducer} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cellarFieldReducer } from './reducers/cellarFieldReducer';

const reducers: Reducer = combineReducers({
  field: cellarFieldReducer
})

const store = createStore(reducers, composeWithDevTools());
export default store;