import React from 'react';
import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className='layout'>
      <header className="layout__header"><Navbar /></header>
      <main className='layout__main'><Outlet /></main>
      <footer className="layout__footer">
        <p>React&firebase real-time chat course.</p> 
        <p>&#169; All rights reserved.</p> 
      </footer>
    </div>
  );
}


