import { Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Form } from '../components';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError('Оба поля обязательны для заполнения');
    } else {
      setError('');
      // Здесь можно добавить логику для отправки данных на сервер
      alert(`Логин: ${username}, Пароль: ${password}`);
    }
  };
  return (
    <div className="login">
      <Container maxWidth="xs">
      <Typography variant="h5" component="h1" gutterBottom>
        Login
      </Typography>
      <Form 
        username={username} 
        setUsername={setUsername} 
        password={password} 
        setPassword={setPassword} 
        error={error} 
        handleSubmit={handleSubmit}/>
    </Container>
    </div>
  )
}
