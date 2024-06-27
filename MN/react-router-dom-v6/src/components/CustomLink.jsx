import React from "react"
import { Link, useMatch } from "react-router-dom"

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch({
    path: to,
    end: to.length === 1 ? true : false,
  })
  // console.log(match)

  return (
    <Link
      to={to}
      {...props}
      style={{
        color: match
          ? to.length === 1
            ? "orange"
            : "var(--color-active)"
          : "white",
        cursor: match ? "default" : "pointer",
      }}
    >
      {children}
    </Link>
  )
}

export { CustomLink }
