import React from "react"

const Pagination = React.memo(({ pageCount, setPage, currentPage }) => {
  console.log("pagination")
  const pageNumbers = []
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i)
  }

  return (
    <>
      {pageCount && (
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li className="pagination-item" key={number}>
              <button
                className={
                  currentPage === number
                    ? "pagination-btn_active"
                    : "pagination-btn"
                }
                onClick={() => setPage(number)}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  )
})

export { Pagination }
