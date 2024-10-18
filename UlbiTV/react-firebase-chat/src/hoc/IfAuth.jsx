
import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"



export const IfAuth = ({ children }) => {
  // const location = useLocation()
  const { isAuth } = useAuth()
  if (isAuth) {
    return <Navigate to="/error" />
  }
  return children
}