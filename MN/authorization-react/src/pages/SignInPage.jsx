import React from 'react';
import { Link } from 'react-router-dom';

const SignInPage = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <p className='auth-text'>If you are not registred yet, please<Link to="registration">sign up</Link></p>
    </div>
  );
}

export default SignInPage;
