import React from "react"
import { useDispatch } from "react-redux"
import { setUser } from "store/slices/userSlice"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { Form } from "./Form"
import { useLocation, useNavigate } from "react-router-dom"
const Registration = () => {
  const dispatch = useDispatch()
  const navigate  = useNavigate()
  const location = useLocation()
  const from = location?.state?.from || '/'

  const handleRegister = (email, password) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user)
        dispatch(setUser({
          email: user.email,
          token: user.accessToken,
          id: user.uid,
        }))
        navigate(from, {replace: 'true'})
      })
      .catch((error) => {
        // const errorCode = error.code
        // const errorMessage = error.message
        console.log(error)
      })
  }
  return <Form buttonValue="Sign Up" handleClick={handleRegister} />
}

export { Registration }
