import { useAuth } from 'hooks/useAuth';
import React from 'react';

const HomePage = () => {
  const {email} = useAuth()
  return (
    <h1>
      Welcome, {email}, to our application!
    </h1>
    
  );
}

export default HomePage;
