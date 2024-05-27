const defaultState = {
  cash: 0,
}

export const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload }
    case "GET_CASH":
      if (state.cash <= 0) {
        return state
      }
      return { ...state, cash: state.cash - action.payload }
    default:
      return state
  }
}