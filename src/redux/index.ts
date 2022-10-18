import {createStore, combineReducers, Reducer} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cellarFieldReducer } from './reducers/cellarFieldReducer';
import { controllerReducer } from './reducers/controllerReducer';

const reducers: Reducer = combineReducers({
  field: cellarFieldReducer,
  controllers: controllerReducer
})

const store = createStore(reducers, composeWithDevTools());
export default store;