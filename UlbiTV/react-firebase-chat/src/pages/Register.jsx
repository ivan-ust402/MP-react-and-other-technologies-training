import { Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Form } from '../components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { setUser } from '../store/slices/userSlice';

export const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const to = '/chat'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError('Оба поля обязательны для заполнения');
    } else {
      setError('');
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, username, password)
      .then(({user}) => {
        navigate(to)
        dispatch(setUser({
          email: user.email,
          token: user.accessToken,
          id: user.uid,
        }))
        
      })
      .catch((error) => {
        console.log(error.message)
        if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
          setError('Password should be at least 6 characters, try again')
          setPassword('')
          setUsername('')
        } else if (error.message === 'Firebase: Error (auth/invalid-email).') {
          setError('You entered incorrect Email, try again')
          setPassword('')
          setUsername('')
        } else {
          setError('Something went wrong! Try entering your details again.')
        }
      })
      .finally(
        // setTimeout(() => {
        //   setError('')
        // }, 3000)
        
      )
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
          handleSubmit={handleSubmit} 
          buttonTitle={'Sign Up'}
        />
        <Typography component="p" sx={{
          marginTop: '20px',
        }}>
         If you are already registered, <Link to='/login' className='link'>log in</Link>
        </Typography>
      </Container>
    </div>
  )
}
