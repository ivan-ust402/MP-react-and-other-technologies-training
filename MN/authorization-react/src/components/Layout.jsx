import React from "react"
import { Outlet } from "react-router-dom"

const Layout = () => {
  // const {user, signIn, signOut} = useAuth()
  // const hadlerSignOut = () => signOut(() => navigate(fromPage, {replace: true}))
  return (
    <>
      <header className="header">
      {/* {user ? <button onClick={hadlerSignOut} className="btn_secondary" >Sign Out</button>: <button className="btn_secondary"><Link className="btn-link_secondary" to={'login'} state={{from: fromPage}}>Sign In</Link></button>} */}
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="footer">
        <h3>&copy; React, Redux-toolkit, React-router-dom, firebase tutorial 2024</h3>
      </footer>
    </>
  )
}

export default Layout
