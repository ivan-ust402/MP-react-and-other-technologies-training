import "./App.css"
import { useSelector, useDispatch } from "react-redux"
import { decreaseCountAction, increaseCountAction } from "./store/countReducer"

const App = () => {
  const count = useSelector((state) => state.countReducer.count)
  const users = useSelector((state) => state.userReducer.users)
  const dispatch = useDispatch()

  return (
    <div className="App center">
      <div className="count">{count}</div>
      <div className="btns">
        <button onClick={() => dispatch(increaseCountAction())} className="btn">
          ИНКРЕМЕНТ++
        </button>
        <button onClick={() => dispatch(decreaseCountAction())} className="btn">
          ДЕКРЕМЕНТ--
        </button>
      </div>
      <div className="btns">
        <button className="btn">ПОЛУЧИТЬ ЮЗЕРОВ</button>
      </div>
      <div className="users">
        {users.length ? users.map((user) => (
          <div className="user">{user.name}</div>
        )): <div>Список пользователей пуст</div>}
      </div>
    </div>
  )
}

export default App
