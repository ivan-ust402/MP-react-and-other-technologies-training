import { Login } from "components/Login"
import React from "react"
import { Link } from "react-router-dom"

const SignInPage = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <div className="auth-position">
        {/* <Login className="form-position" /> */}
        <Login />
        <p className="auth-text">
          If you are not registred yet, please
          <Link to="/registration">sign up.</Link>
        </p>
      </div>
    </div>
  )
}

export default SignInPage
