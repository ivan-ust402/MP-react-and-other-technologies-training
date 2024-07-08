import { useAuth } from "hooks/useAuth"
import React, { FC, ReactNode } from "react"
import { Navigate, useLocation } from "react-router-dom"

interface RequiredAuthProps {
  children: ReactNode;
}

const RequieredAuth: FC<RequiredAuthProps> = ({ children }) => {
  const location = useLocation()
  const { isAuth } = useAuth()
  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} />
  }
  return children
}

export { RequieredAuth }
