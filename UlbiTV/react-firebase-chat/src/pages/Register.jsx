import { Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Form } from '../components';
import { Link } from 'react-router-dom';

export const Register = () => {
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
          Registration
        </Typography>
        <Form
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          error={error}
          handleSubmit={handleSubmit} />
        <Typography component="p" sx={{
          marginTop: '20px',
          textAlign: 'center'
        }}>
         If you are already registered, <Link to='/login' className='link'>log in</Link>
        </Typography>
      </Container>
    </div>
  )
}
