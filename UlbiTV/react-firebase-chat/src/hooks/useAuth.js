import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { setUser } from "../store/slices/userSlice";

export const useAuth = () => {
  const {email, id, token} = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const to = '/chat'

  const signIn = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError('Оба поля обязательны для заполнения');
    } else {
      setError('');
      setLoading(true)
      const auth = getAuth()
      signInWithEmailAndPassword(auth, username, password)
        .then(({ user }) => {
          dispatch(setUser({
            email: user.email,
            token: user.accessToken,
            id: user.uid
          }))
          navigate(to, { replace: true })
          setLoading(false)
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
          setLoading(false)
        })
    }
  };
  const signUp = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError('Оба поля обязательны для заполнения');
    } else {
      setError('');
      setLoading(true)
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, username, password)
      .then(({user}) => {
        
        dispatch(setUser({
          email: user.email,
          token: user.accessToken,
          id: user.uid,
        }))
        navigate(to, {replace: true})
        setLoading(false)
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
        setLoading(false)
      })
      .finally(
        // setTimeout(() => {
        //   setError('')
        // }, 3000)
        
      )
    }
  };
  return {
    isAuth: !!email,
    email, 
    token,
    id,
    signIn,
    signUp,
    username,
    setUsername,
    password,
    setPassword,
    error,
    setError,
    loading,
    setLoading
  }
}