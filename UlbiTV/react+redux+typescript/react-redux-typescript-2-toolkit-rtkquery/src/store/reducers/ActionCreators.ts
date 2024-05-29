import { IUser } from "../../models/IUser";
import { AppDispatch } from "../store";
import axios from "axios";
import { userSlice } from "./UserSlice";

const {usersFetching, usersFetchingSuccess, usersFetchingError} = userSlice.actions

export const fetchUsers =  () => async (dispatch: AppDispatch) => {
  try {
    dispatch(usersFetching())
    const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users?_limit=5')
    setTimeout(() => dispatch(usersFetchingSuccess(response.data)), 1000)
  } catch (error) {
    console.log(error)
    dispatch(usersFetchingError('Произошла ошибка при загрузке пользователей!'))
  }
}