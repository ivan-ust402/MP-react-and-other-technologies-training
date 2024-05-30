import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./reducers/UserSlice";
import { counterSlice } from "./reducers/CounterSlice";
import { postAPI } from "../services/PostService";


export const rootReducer = combineReducers({
  user: userSlice.reducer,
  counter: counterSlice.reducer,
  [postAPI.reducerPath]: postAPI.reducer
})

// При configureStore нет необходимости настраивать devtools и
// middleware thunk, т.к. они уже идут из коробки
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware)
  })
}

// Получаем тип нашего редьюсера
// При помощи ReturnType мы можем получить тот тип, 
// который нам возвращает функция
export type RootState = ReturnType<typeof rootReducer>

// Получаем тип нашего хранилища
export type AppStore = ReturnType<typeof setupStore>

// Получим тип Dispatch
export type AppDispatch = AppStore['dispatch']