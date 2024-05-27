const defaultStore = {
  customers: []
}

const ADD_CUSTOMER = "ADD_CUSTOMER"
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER"
const REMOVE_CUSTOMERS = "REMOVE_CUSTOMERS"

export const customerReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] }
    case REMOVE_CUSTOMER: 
      return {...state, customers: state.customers.filter(item => item.id !== action.payload)}
    case REMOVE_CUSTOMERS:
      return {...state, customers: []}
    default:
      return state
  }
}

export const addCustomerAction = (payload) => ({
  type: ADD_CUSTOMER,
  payload
})

export const removeCustomerAction = (payload) => ({
  type: REMOVE_CUSTOMER,
  payload
})

export const removeAllCustomersAction = () => ({
  type: REMOVE_CUSTOMERS
})