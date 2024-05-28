import React, { useEffect } from "react"
import { useTypedSelector } from "../hooks/useTypedSelector"
// import { fetchUsers } from "../store/action-creators/users"
// import { useAppDispatch } from "../store"
import { useActions } from "../hooks/useActions"

const TodoList: React.FC = () => {
  const { error, todos, loading, page, limit } = useTypedSelector(
    (state) => state.todo
  )
  const { fetchTodos, setTodoPage } = useActions()
  const pages = [1, 2, 3, 4, 5]

  useEffect(() => {
    fetchTodos(page, limit)
  }, [page])


  if (loading) {
    return <h1>Идет загрузка списка дел...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div className="todos">
      {todos.map((todo, index) => (
        <div key={todo.id} className="todo underline-animation">
          id: {todo.id} - title: {todo.title}
        </div>
      ))}
      <div className="pagination">
        {pages.map((p, index) => (
          <div
            style={{
              padding: '2px 7px',
              border: p === page ? "2px solid green" : "1px solid #ccc",
            }}
            className="page"
            onClick={() => setTodoPage(p)}
            key={index}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoList
