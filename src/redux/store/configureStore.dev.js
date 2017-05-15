import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
// Logging actions/state to your console
import createLogger from 'redux-logger'
// Allows you to write action creators that return a function to perform asynchronous dispatch
import thunk from 'redux-thunk'

const logger = createLogger()

// Using Redux DevTools Extension installed in browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const finalCreateStore = composeEnhancers(
  // Middleware you want to use in development:
  applyMiddleware(logger, thunk),
)(createStore)

module.exports = function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState)

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    )
  }

  return store
}
