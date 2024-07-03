import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import HomePage from "../pages/HomePage"
import SignInPage from "../pages/SignInPage"
import SignUpPage from "../pages/SignUpPage"
import NotFoundPage from "../pages/NotFoundPage"
import Layout from "../components/Layout"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="login" element={<SignInPage />} />
      <Route path="registration" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
)
