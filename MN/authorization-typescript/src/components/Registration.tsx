import React from "react"
import { setUser } from "store/slices/userSlice"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { Form } from "./Form"
import { useLocation, useNavigate } from "react-router-dom"
import { useAppDispatch } from "hooks/redux-hooks"

const Registration = () => {
  const dispatch = useAppDispatch()
  const navigate  = useNavigate()
  const location = useLocation()
  const from = location?.state?.from || '/'

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(setUser({
          email: user.email,
          token: user.refreshToken,
          id: user.uid,
        }))
        navigate(from, {replace: true})
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
