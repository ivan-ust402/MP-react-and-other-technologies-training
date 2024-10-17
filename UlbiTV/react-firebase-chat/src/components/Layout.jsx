import React from 'react';
import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className='layout'>
      <header><Navbar /></header>
      <main><Outlet /></main>
      <footer>Footer</footer>
    </div>
  );
}


