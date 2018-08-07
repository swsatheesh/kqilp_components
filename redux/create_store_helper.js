import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reduxReset from 'redux-reset';
import shellReducerObject from './shell_reducer_object';

export default function createStoreHelper(kqilpReducer = {}, config) {
  const reducers = combineReducers({
    ...kqilpReducer,
    ...shellReducerObject
  });
  const store = createStore(reducers, config, compose(
    applyMiddleware(thunk, createLogger()),
    reduxReset(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
}