import "./App.css"
import { Route, Routes } from "react-router-dom"
import { Homepage } from "./pages/Homepage"
import { Blogpage } from "./pages/Blogpage"
import { Aboutpage } from "./pages/Aboutpage"
import { Notfoundpage } from "./pages/Notfoundpage"
import Layout from "./components/Layout"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="posts" element={<Blogpage />} />
          <Route path="about" element={<Aboutpage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
