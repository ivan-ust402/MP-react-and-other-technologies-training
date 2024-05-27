import { combineReducers, createStore } from "redux";
import { countReducer } from "./countReducer";
import { userReducer } from "./userReducer";
import { composeWithDevTools } from "@redux-devtools/extension";


const rootReducer = combineReducers({
  countReducer,
  userReducer
})

export const store = createStore(rootReducer, composeWithDevTools())