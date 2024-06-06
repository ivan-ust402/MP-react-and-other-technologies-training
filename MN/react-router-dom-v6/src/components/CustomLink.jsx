import React from 'react';
import { Link, useMatch } from 'react-router-dom'

const CustomLink = ({children, to, ...props}) => {
  const match = useMatch(to)
  // console.log(match)

  return (
    <Link 
      to={to} 
      {...props}
      style={{
        color: match ? 'orange': 'white',
        cursor: match ? 'default': 'pointer'
      }}
    >
      {children}
    </Link>
  );
}

export { CustomLink };
