import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'reducers/app';
import esriMiddleware from 'middlewares/esriMapview';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Configure middleware used by redux
const middlewares = [
  esriMiddleware
];

// Environment specific middlewares configuration - constant from webpack.DefinePlugin
if (ENV === 'development') { // eslint-disable-line no-undef
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

export default store;
