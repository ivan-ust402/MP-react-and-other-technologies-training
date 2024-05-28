import React, { useEffect } from "react"
import { useTypedSelector } from "../hooks/useTypedSelector"
// import { fetchUsers } from "../store/action-creators/users"
// import { useAppDispatch } from "../store"
import { useActions } from "../hooks/useActions"

const UserList: React.FC = () => {
  const { error, loading, users } = useTypedSelector((state) => state.user)
  // const dispatch = useAppDispatch()
  const { fetchUsers } = useActions()

  //   useEffect(() => {
  //     dispatch(fetchUsers())
  // }, [dispatch])

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return <h1>Идет загрузка пользователей...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div className="users">
      {users.map((user, index) => (
        <div key={index} className="user underline-animation">
          {index + 1}. {user.name}
        </div>
      ))}
    </div>
  )
}

export default UserList
