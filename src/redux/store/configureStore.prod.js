import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer, { rootEpic } from '../reducers'
import { createEpicMiddleware } from 'redux-observable'

const epicMiddleware = createEpicMiddleware(rootEpic)

const finalCreateStore = compose(
  applyMiddleware(epicMiddleware)
)(createStore)

module.exports = function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState)
}
