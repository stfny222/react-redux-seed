import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import rootReducer, { rootEpic } from '../reducers'
// Logging actions/state to your console
import createLogger from 'redux-logger'

const logger = createLogger()

const epicMiddleware = createEpicMiddleware(rootEpic)

// Using Redux DevTools Extension installed in browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const finalCreateStore = composeEnhancers(
  // Middleware you want to use in development:
  applyMiddleware(logger, epicMiddleware),
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
