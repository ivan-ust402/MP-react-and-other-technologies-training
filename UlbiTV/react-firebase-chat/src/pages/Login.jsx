import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Form } from '../components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";

export const Login = () => {
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
      signInWithEmailAndPassword(auth, username, password)
        .then(({user}) =>{
          dispatch(setUser({
            email: user.email,
            token: user.accessToken,
            id: user.uid
          }))
          navigate(to, {replace: true})
        })
        .catch((error) => {
          console.log(error.message)
          if (error.message === 'Firebase: Error (auth/invalid-credential).') {
            setError('You entered incorrect data, try again')
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
        handleSubmit={handleSubmit}
        buttonTitle={'Sign In'}
      />
      <Typography component="p" sx={{
        marginTop: '20px',
      }}>
        If you are not registered yet, please <Link to='/registration' className='link'>register</Link>
      </Typography>
    </Container>
    </div>
  )
}
