import React from "react"
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom"
import { CustomLink } from "./CustomLink"
import { useAuth } from "../hooks/useAuth"

const setActiveClassName = ({isActive}) => isActive? 'active-link' : ''

// const setActiveClassNameWithOptions = (obj) => {
//   // console.log(obj)
//   return obj.isActive ? 'active-link' : ''
// }

const setActiveStyles = ({isActive}) => ({
  color: isActive ? 'var(--color-active)' : '',
  cursor: isActive ? 'default': ''})

const Layout = () => {
  const {user, signIn, signOut} = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const fromPage = location.state?.from?.pathname || '/'
  const hadlerSignOut = () => signOut(() => navigate(fromPage, {replace: true}))
  return (
    <>
      <header>
        {/* <NavLink className={setActiveClassNameWithOptions} to="/">
          Home
        </NavLink> */}
        <CustomLink to={"/"}>Home</CustomLink>
        <NavLink 
          to="/posts?_page=1&_limit=15" 
          style={setActiveStyles}
        >
          Blog
        </NavLink>
        <NavLink 
          to="/posts-v2?_page=1&_limit=15" 
          style={setActiveStyles}
        >
          Blog Ver.2
        </NavLink>
        <NavLink 
          to="/search-posts?_page=1&_limit=15" 
          style={setActiveStyles}
        >
          Search
        </NavLink>
        {/* <NavLink className={setActiveClassName} to="/about-us">
          About
        </NavLink> */}
        <CustomLink to="/about-us">
          About
        </CustomLink>
        {user ? <button onClick={hadlerSignOut} className="btn_secondary" >Sign Out</button>: <button className="btn_secondary"><Link className="btn-link_secondary" to={'login'} state={{from: fromPage}}>Sign In</Link></button>}
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

export { Layout }
