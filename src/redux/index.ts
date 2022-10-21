import {createStore, combineReducers, Reducer} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cellarFieldReducer } from './reducers/cellarFieldReducer';
import { previewRulesReducer } from './reducers/previewRulesReducer';

const reducers: Reducer = combineReducers({
  field: cellarFieldReducer,
  preview: previewRulesReducer
})

const store = createStore(reducers, composeWithDevTools());
export default store;