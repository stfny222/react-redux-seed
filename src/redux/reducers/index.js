import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'

import counter from '../ducks/counter'
import users, { fetchUserEpic } from '../ducks/users'

export const rootEpic = combineEpics(
  fetchUserEpic
);

const rootReducer = combineReducers({
  counter,
  users
})

export default rootReducer
