import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "@redux-devtools/extension"
import { thunk } from "redux-thunk"
import { rootReducer } from "./reducers"
import { useDispatch } from "react-redux"


export const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
)



export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
