import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
// import { userSlice } from '../store/reducers/UserSlice';
import { fetchUsers } from '../store/reducers/ActionCreators';

const UserList = () => {
  const { error, isLoading, users } = useAppSelector((state) => state.user)
  // const {  } = userSlice.actions
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  },
[dispatch])

  return (
    <div className='users'>
      {isLoading && <div className="loader">Идет загрузка пользователей с сервера...</div>}
      {error && <div className="error">{error}</div>}
      {users && users.map(user => (
        <div key={user.id} className='user'>{user.id} - {user.name}</div>
      ))}
    </div>
  );
};

export default UserList;