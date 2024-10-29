import { Container, Typography } from '@mui/material'
import React from 'react'
import { Form, Loader } from '../components';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const Register = () => {
  const { 
    signUp, 
    username, 
    setUsername, 
    password, 
    setPassword, 
    error, 
    loading 
  } = useAuth()

  return (
    <div className="login">
      {
        loading
        ? <Loader />
        : <Container maxWidth="xs">
        <Typography variant="h5" component="h1" gutterBottom>
          Registration
        </Typography>
        <Form
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          error={error}
          handleSubmit={signUp} 
          buttonTitle={'Sign Up'}
        />
        <Typography component="p" sx={{
          marginTop: '20px',
        }}>
         If you are already registered, <Link to='/login' className='link'>log in</Link>
        </Typography>
      </Container>
      }
    </div>
  )
}
