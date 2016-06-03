import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import undefinedMiddleware from './undefinedMiddleware';
import asyncAwaitMiddleware from './asyncAwaitMiddleware';

export default isServer => ([
  undefinedMiddleware,
  thunk,
  asyncAwaitMiddleware({
    promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR'],
  }),
  !isServer && createLogger(),
]);

// if (module.hot) {
//   // Enable Webpack hot module replacement for reducers
//   module.hot.accept('../reducers', () => {
//     const nextRootReducer = require('../reducers');
//     store.replaceReducer(nextRootReducer);
//   });
// }
