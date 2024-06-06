import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import { CustomLink } from "./CustomLink"

const setActiveClassName = ({isActive}) => isActive? 'active-link' : ''

// const setActiveClassNameWithOptions = (obj) => {
//   // console.log(obj)
//   return obj.isActive ? 'active-link' : ''
// }

const setActiveStyles = ({isActive}) => ({
  color: isActive ? 'var(--color-active)' : '',
  cursor: isActive ? 'default': ''})

const Layout = () => {
  return (
    <>
      <header>
        {/* <NavLink className={setActiveClassNameWithOptions} to="/">
          Home
        </NavLink> */}
        <CustomLink to={"/"}>Home</CustomLink>
        <NavLink 
          to="/posts" 
          style={setActiveStyles}
        >
          Blog
        </NavLink>
        <NavLink className={setActiveClassName} to="/about">
          About
        </NavLink>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer>
        <h3>&copy; React-router-dom tutorial 2024</h3>
      </footer>
    </>
  )
}

export default Layout
