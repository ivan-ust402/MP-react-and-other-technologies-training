import React from "react"
import { Link } from "react-router-dom"

const PaginationForSearch = React.memo(
  ({ pageCount, setPage, currentPage, limit, search, latest }) => {
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
                  to={ latest 
                    ? `/search-posts?_page=${number}&_limit=${limit}&search=${search}&latest=${latest}` 
                    : `/search-posts?_page=${number}&_limit=${limit}&search=${search}`
                  }
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
  }
)

export { PaginationForSearch }
