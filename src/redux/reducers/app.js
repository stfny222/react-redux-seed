const mainInitialState = 0

const app = (state = mainInitialState, action) => {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
    // return Object.assign({}, newState)
  default:
    return state
  }
}

export default app
