import React from 'react';
import { useSelector } from 'react-redux';

export const Chat = () => {
  const {email} = useSelector(state => state.user)
  return (
    <div className='chat'>
      <h1>Welcome to the chat, {email}!</h1>
    </div>
  );
}


