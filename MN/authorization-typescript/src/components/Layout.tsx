import { useAppDispatch } from "hooks/redux-hooks"
import { useAuth } from "hooks/useAuth"
import React, {FC} from "react"
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom"
import { removeUser } from "store/slices/userSlice"

interface StylesProps {
  isActive: boolean;
}

const Layout: FC = () => {
  const navigate = useNavigate()
  const { isAuth } = useAuth()
  const location = useLocation()
  const fromPage = location.state?.from?.pathname || "/"
  const dispatch = useAppDispatch()
  const hadlerSignOut = () => {
    dispatch(removeUser())
    navigate("login", { replace: true })
  }
  const setActiveStyles = ({isActive}: StylesProps) => ({
    color: isActive ? 'var(--color-active)' : '',
    cursor: isActive ? 'default': ''})
  return (
    <>
      <header className="header">
        <NavLink to="/" style={setActiveStyles}>Home</NavLink>
        <NavLink to="/about" style={setActiveStyles}>About</NavLink>
        {isAuth ? (
          <button onClick={hadlerSignOut} className="btn_secondary">
            Sign Out
          </button>
        ) : (
          <button className="btn_secondary">
            <Link
              to={"login"}
              state={{ from: fromPage }}
            >
              Sign In
            </Link>
          </button>
        )}
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="footer">
        <h3>
          &copy; React, Redux-toolkit, React-router-dom, firebase tutorial 2024
        </h3>
      </footer>
    </>
  )
}

export default Layout
