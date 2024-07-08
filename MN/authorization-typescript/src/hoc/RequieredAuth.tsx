import { useAuth } from "hooks/useAuth"
import React from "react"
import { Navigate, useLocation } from "react-router-dom"

const RequieredAuth = ({ children }) => {
  const location = useLocation()
  const { isAuth } = useAuth()
  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} />
  }
  return children
}

export { RequieredAuth }
