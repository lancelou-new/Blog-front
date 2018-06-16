import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import todoApp from '../reducers';

const configureStore = (preloadedState) => {
  const loggerMiddleware = createLogger();
  const middlewares = [thunk];
  let createStoreParams = null;

  if (process.env.NODE_ENV !== 'production') {
    // middlewares.push(loggerMiddleware);
  }

  if (preloadedState) {
    createStoreParams = [todoApp, preloadedState, applyMiddleware(...middlewares)];
  } else {
    createStoreParams = [todoApp, applyMiddleware(...middlewares)];
  }
  const store = createStore(...createStoreParams);
  return store;
};

export default configureStore;
