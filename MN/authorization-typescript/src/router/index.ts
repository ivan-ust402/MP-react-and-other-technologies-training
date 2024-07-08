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
import { RequieredAuth } from "hoc/RequieredAuth"
import AboutPage from "pages/AboutPage"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <RequieredAuth>
            <HomePage />
          </RequieredAuth>
        }
      />
      <Route
        path="about"
        element={
          <RequieredAuth>
            <AboutPage />
          </RequieredAuth>
        }
      />
      <Route path="login" element={<SignInPage />} />
      <Route path="registration" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
)
