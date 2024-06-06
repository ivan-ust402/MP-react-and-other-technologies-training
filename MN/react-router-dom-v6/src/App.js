import "./App.css"
import { Link, Outlet, Route, Routes } from "react-router-dom"
import { Homepage } from "./components/Homepage"
import { Blogpage } from "./components/Blogpage"
import { Aboutpage } from "./components/Aboutpage"
import { Notfoundpage } from "./components/Notfoundpage"

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">Home</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/posts" element={<Blogpage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Routes>
        <Outlet />
      </main>
      <footer>
        <h3>&copy; React-router-dom tutorial 2024</h3>
      </footer>
    </div>
  )
}

export default App
