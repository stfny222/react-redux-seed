// Actions
const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMENT'

// Initial state
const mainInitialState = { count: 0 }

// Reducer
const reducer = (state = mainInitialState, action = {}) => {
  switch (action.type) {
  case INCREMENT:
    return Object.assign({}, {count: state.count + 1})
  case DECREMENT:
    return Object.assign({}, {count: state.count - 1})
  default:
    return state
  }
}

// Action Creators
export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}

export default reducer
