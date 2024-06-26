import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

const LoginPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { signIn } = useAuth()

  const fromPage = location.state?.from?.pathname || "/"

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const user = form.username.value

    signIn(user, () => navigate(fromPage, {replace: true}))
  }

  return (
    <div>
      <h1>Login page</h1>
      {/* {fromPage} */}
      <form className='login-form' onSubmit={handleSubmit}>
        <label className="label">
          Name: <input  className="input" type="text" name="username"/>
        </label>
        <button  className="btn" type="submit">Sign In</button>
      </form>
    </div>
  )
}

export { LoginPage }
