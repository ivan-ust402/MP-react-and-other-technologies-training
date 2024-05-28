import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../store/action-creators/users';
import { Dispatch } from 'redux';
import { UserAction } from '../types/users';


const UserList: React.FC = () => {
  const {users, loading, error} = useTypedSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  if (loading) {
    return <h1>Идет загрузка пользователей...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {users.map(user => 
        <div>{user.name}</div>
      )}
    </div>
  );
};

export default UserList;