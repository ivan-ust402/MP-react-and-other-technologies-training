
import React from "react"
import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"



export const RequieredAuth = ({ children }) => {
  const location = useLocation()
  console.log(location)
  const { isAuth } = useAuth()
  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} />
  }
  return children
}