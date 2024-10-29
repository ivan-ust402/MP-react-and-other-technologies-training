import { Container, Typography } from '@mui/material'
import React from 'react'
import { Form, Loader } from '../components';
import { Link } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth";

export const Login = () => {
  const {
    signIn,
    username, 
    setUsername, 
    password, 
    setPassword,
    loading,
    error,
  } = useAuth()
  
  return (
    <div className="login">
      {
        loading
        ? <Loader />
        : <Container maxWidth="xs">
        <Typography variant="h5" component="h1" gutterBottom>
          Login
        </Typography>
        <Form
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          error={error}
          handleSubmit={signIn}
          buttonTitle={'Sign In'}
        />
        
        <Typography component="p" sx={{
          marginTop: '20px',
        }}>
          If you are not registered yet, please <Link to='/registration' className='link'>register</Link>
        </Typography>
      </Container>
      }
    </div>
  )
}
