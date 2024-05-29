import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { userSlice } from '../store/reducers/UserSlice';
import { fetchUsers } from '../store/reducers/ActionCreators';

const UserList = () => {
  const { error, isLoading, users } = useAppSelector((state) => state.user)
  const {  } = userSlice.actions
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  },
[])

  if (error) {
    return (
      <div className="error">{error}</div>
    )
  }
  if (isLoading) {
    return (
      <div className="loader">Идет загрузка пользователей с сервера...</div>
    )
  }
  return (
    <div className='users'>
      {users.map(user => (
        <div className='user'>{user.id} - {user.name}</div>
      ))}
    </div>
  );
};

export default UserList;