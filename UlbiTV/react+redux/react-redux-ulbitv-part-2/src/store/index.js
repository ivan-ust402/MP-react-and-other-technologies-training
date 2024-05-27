import { applyMiddleware, combineReducers, createStore } from "redux";
import { countReducer } from "./countReducer";
import { userReducer } from "./userReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from "../saga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  countReducer,
  userReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootWatcher)