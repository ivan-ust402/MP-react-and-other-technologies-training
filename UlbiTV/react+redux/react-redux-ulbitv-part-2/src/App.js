import "./App.css"
import { useSelector, useDispatch } from "react-redux"
import { asyncDecreaseCountAction, asyncIncreaseCountAction, decreaseCountAction, increaseCountAction } from "./store/countReducer"
import { fetchUsers } from "./store/userReducer"

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
          <button
            onClick={() => {
              dispatch(asyncIncreaseCountAction())
            }}
            className="btn"
          >
            АСИНХРОННЫЙ ИНКРЕМЕНТ++
          </button>
          <button
            onClick={() => {
              dispatch(asyncDecreaseCountAction())
            }}
            className="btn"
          >
            АСИНХРОННЫЙ ДЕКРЕМЕНТ--
          </button>
        </div>
      <div className="btns">
        <button className="btn" onClick={() => {
          dispatch(fetchUsers())
        }}>ПОЛУЧИТЬ ЮЗЕРОВ</button>
      </div>
      <div className="users">
        {users.length ? (
          users.map((user, index) => <div key={index} className="user">{index+1}. {user.name}</div>)
        ) : (
          <div>Список пользователей пуст</div>
        )}
      </div>
    </div>
  )
}

export default App
