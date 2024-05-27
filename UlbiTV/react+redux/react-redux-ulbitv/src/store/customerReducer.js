const defaultStore = {
  customers: []
}

const ADD_CUSTOMER = "ADD_CUSTOMER"
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER"
const REMOVE_CUSTOMERS = "REMOVE_CUSTOMERS"
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS"

export const customerReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case ADD_MANY_CUSTOMERS:
      return {...state, customers: [...state.customers, ...action.payload]}
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

export const addManyCustomersAction = (payload) => ({
  type: ADD_MANY_CUSTOMERS,
  payload
})
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