import "./App.css"
import { Navigate, Route, Routes } from "react-router-dom"
import { BlogPage } from "./pages/BlogPage"
import { AboutPage } from "./pages/AboutPage"
import { NotFoundPage } from "./pages/NotFoundPage"
import { Layout } from "./components/Layout"
import { PostPage } from "./pages/PostPage"
import { HomePage } from "./pages/HomePage"
import { CreatePostPage } from "./pages/CreatePostPage"
import { EditPostPage } from "./pages/EditPostPage"
import LoginPage from "./pages/LoginPage"
import { RequireAuth } from "./hoc/RequireAuth"
import { AuthProvider } from "./hoc/AuthProvider"

function App() {
  console.log("App")
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="posts" element={<BlogPage />} />
            <Route path="posts/:id" element={<PostPage />} />
            <Route
              path="posts/:id/edit"
              element={
                <RequireAuth>
                  <EditPostPage />
                </RequireAuth>
              }
            />
            <Route
              path="posts/create"
              element={
                <RequireAuth>
                  <CreatePostPage />
                </RequireAuth>
              }
            />
            <Route path="posts/create/edit" element={<NotFoundPage />} />
            <Route path="about-us" element={<AboutPage />} />
            <Route
              path="about"
              element={<Navigate to={"/about-us"} replace />}
            ></Route>
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
