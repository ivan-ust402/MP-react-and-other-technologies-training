const defaultState = {
  count: 0,
}

export const INCREASE_COUNT = "INCREASE_COUNT"
export const ASYNC_INCREASE_COUNT = "ASYNC_INCREASE_COUNT"
export const DECREASE_COUNT = "DECREASE_COUNT"
export const ASYNC_DECREASE_COUNT = "ASYNC_DECREASE_COUNT"

export const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      return { ...state, count: state.count + action.payload }
    case DECREASE_COUNT:
      return { ...state, count: state.count - action.payload }
    default:
      return state
  }
}

export const increaseCountAction = (payload = 1) => ({
  type: INCREASE_COUNT,
  payload,
})

export const asyncIncreaseCountAction = (payload = 1) => ({
  type: ASYNC_INCREASE_COUNT,
  payload,
})

export const decreaseCountAction = (payload = 1) => ({
  type: DECREASE_COUNT,
  payload,
})

export const asyncDecreaseCountAction = (payload = 1) => ({
  type: ASYNC_DECREASE_COUNT,
  payload,
})
