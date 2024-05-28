import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/action-creators/users';
import { useAppDispatch } from '../store';


const UserList: React.FC = () => {
  const {users, loading, error} = useTypedSelector(state => state.user)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
}, [dispatch])

  if (loading) {
    return <h1>Идет загрузка пользователей...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {users.map((user, index) => 
        <div key={index}>{user.name}</div>
      )}
    </div>
  );
};

export default UserList;