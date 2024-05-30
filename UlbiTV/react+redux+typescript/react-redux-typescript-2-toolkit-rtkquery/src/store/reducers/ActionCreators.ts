import { IUser } from "../../models/IUser"
// import { AppDispatch } from "../store";
import axios from "axios"
// import { userSlice } from "./UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit"

// const {usersFetching, usersFetchingSuccess, usersFetchingError} = userSlice.actions

// export const fetchUsers =  () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(usersFetching())
//     const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users?_limit=5')
//     setTimeout(() => dispatch(usersFetchingSuccess(response.data)), 1000)
//   } catch (error) {
//     console.log(error)
//     setTimeout(() => dispatch(usersFetchingError('Произошла ошибка при загрузке пользователей!')), 1000)
//   }
// }

export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      // console.log(await new Promise(res => setTimeout(() => res("успешное выполнение"), 1000)))
      await new Promise((res) => setTimeout(res, 1000))
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users?_limit=5"
      )
      return response.data
    } catch (error) {
      // await new Promise((res) => setTimeout(res, 1000))
      return thunkAPI.rejectWithValue(`c(о_О)ↄ Не удалось загрузить пользователей! ¯\\_(ツ)_/¯`)
    }
  }
)
