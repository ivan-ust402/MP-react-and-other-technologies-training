import React from "react"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const ErrorPage = () => {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <Header />
        <main className="container">
          <div className="error">
            <h1>{error.status}</h1>
            <h2>
              {error.data?.message ||
                error.statusText ||
                "Something goes wrong!"}
            </h2>
            {error.data && <h3>{error.data.reason}</h3>}
          </div>
        </main>
        <Footer />
      </>
    )
  }
  // return <div>Something went wrong!</div>
  // либо
  throw error
}

export { ErrorPage }
