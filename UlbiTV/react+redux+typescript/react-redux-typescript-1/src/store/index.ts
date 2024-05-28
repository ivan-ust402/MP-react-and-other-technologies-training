// import { applyMiddleware, createStore } from "redux"
// import { composeWithDevTools } from "@redux-devtools/extension"
// import { thunk } from "redux-thunk"
// import { rootReducer } from "./reducers"
// import { useDispatch } from "react-redux"

// export const store = createStore(
//   rootReducer,
//   {},
//   composeWithDevTools(applyMiddleware(thunk))
// )

import { configureStore } from "@reduxjs/toolkit"
import { rootReducer } from "./reducers"
import { thunk } from "redux-thunk"
import { useDispatch } from "react-redux"

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: true
})


export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
