import React, {FC} from "react"
import { setUser } from "store/slices/userSlice"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { Form } from "./Form"
import { useLocation, useNavigate } from "react-router-dom"
import { useAppDispatch } from "hooks/redux-hooks"

const Login: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from || '/'

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(setUser({
          email: user.email,
          token: user.refreshToken,
          id: user.uid,
        }))
        navigate(from, {replace: true})
      })
      // .catch((error) => {
      //   // const errorCode = error.code
      //   // const errorMessage = error.message
      //   console.log(error)
      // })
      .catch(() => alert('Invalid user'))
  }
  return <Form buttonValue="Sign In" handleClick={handleLogin}/>
}

export { Login }
