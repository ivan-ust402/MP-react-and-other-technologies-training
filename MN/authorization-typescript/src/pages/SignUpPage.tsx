import { Registration } from "components/Registration"
import React from "react"
import { Link } from "react-router-dom"

const SignUpPage = () => {
  return (
    <div>
      <h1>Sign Up:</h1>
      <div className="auth-position">
        {/* <Registration className="form-position" /> */}
        <Registration />
        <p className="auth-text">
          If you are already registred<Link to="/login">sign in.</Link>
        </p>
      </div>
    </div>
  )
}

export default SignUpPage
