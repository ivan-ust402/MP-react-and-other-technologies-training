import React from "react"
import { Link } from "react-router-dom"

const Pagination = React.memo(({ pageCount, setPage, currentPage, limit, routePart }) => {
  // console.log("pagination")
  const pageNumbers = []
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i)
  }

  return (
    <>
      {!!pageCount && (
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li className="pagination-item" key={number}>
              <Link
                style={{
                  color: currentPage === number ? "white" : "black",
                  textDecoration: "none",
                  cursor: currentPage === number ? "default" : "pointer",
                }}
                to={`/${routePart}?_page=${number}&_limit=${limit}`}
                onClick={() => setPage(number)}
              >
                <button
                  className={
                    currentPage === number
                      ? "pagination-btn_active"
                      : "pagination-btn"
                  }
                >
                  {number}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  )
})

export { Pagination }
