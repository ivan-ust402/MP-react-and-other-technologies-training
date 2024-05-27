const defaultStore = {
  customers: []
}

export const customerReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case "ADD_CUSTOMER":
      return { ...state, customer: state.customer + action.payload }
    case "GET_CUSTOMERS":
      if (state.cash <= 0) {
        return state
      }
      return { ...state, cash: state.cash - action.payload }
    default:
      return state
  }
}