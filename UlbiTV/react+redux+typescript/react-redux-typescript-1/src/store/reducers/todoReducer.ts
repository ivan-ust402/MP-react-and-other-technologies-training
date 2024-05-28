import { IUserState, UserAction, UserActionTypes } from "../../types/users"

const defaultState: IUserState = {
  users: [],
  loading: false,
  error: null,
}

export const todoReducer = (
  state = defaultState,
  action: UserAction
): IUserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return { loading: true, error: null, users: [] }
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return { loading: false, error: null, users: action.payload }
    case UserActionTypes.FETCH_USERS_ERROR:
      return { loading: false, error: action.payload, users: [] }
    default:
      return state
  }
}