import "./App.css"
import { Route, Routes } from "react-router-dom"
import { BlogPage } from "./pages/BlogPage"
import { AboutPage } from "./pages/AboutPage"
import { NotFoundPage } from "./pages/NotFoundPage"
import { Layout } from "./components/Layout"
import { PostPage } from "./pages/PostPage"
import { HomePage } from "./pages/HomePage"
import { CreatePostPage } from "./pages/CreatePostPage"
import { EditPostPage } from "./pages/EditPostPage"

function App() {
  console.log("App")
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="posts" element={<BlogPage />} />
          <Route path="posts/:id" element={<PostPage />} />
          <Route path="posts/:id/edit" element={<EditPostPage />} />
          <Route path="posts/create" element={<CreatePostPage />} />
          <Route path="posts/create/edit" element={<NotFoundPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
