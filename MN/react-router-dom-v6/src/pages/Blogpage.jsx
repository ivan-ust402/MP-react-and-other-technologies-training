import React, { useEffect, useMemo, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Loader from "../components/Loader"
import Error from "../components/Error"
import { Pagination } from "../components/Pagination"

const BlogPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location)
  const [posts, setPosts] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(location?.state?.page ? location.state.page : 1)
  const [totalPosts, setTotalPosts] = useState(null)
  const postsPerPage = location?.state?.limit ? location.state.limit : 15
  const delay = 500

  useMemo(() => {
    // console.log("memoTotal")
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(async (res) => {
        await new Promise((resolve, reject) => {
          setTimeout(resolve, delay)
        })
        return res.json()
      })
      .then((data) => setTotalPosts(data.length))
      .catch((e) => {
        setError(e.message)
        return 0
      })
  }, [])

  useEffect(() => {
    setLoading(true)
    setError("")
    setPosts([])
    location.state = {page: currentPage, limit: postsPerPage}

    fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${postsPerPage}`
    )
      .then(async (response) => {
        await new Promise((res) => {
          setTimeout(res, delay)
        })
        setLoading(false)
        setError("")
        return response.json()
      })
      .then((json) => setPosts(json))
      .catch((e) => {
        setLoading(false)
        setPosts([])
        return setError(e.message)
      })
  }, [currentPage])

  const countPages = Math.ceil(totalPosts / postsPerPage)

  return (
    <>
      <h1>Our company posts and articles</h1>
      <div className="controls">
        <button className="btn">
          <Link className="btn-link" to={"/posts/create"}>
            Create New Post
          </Link>
        </button>
      </div>
      {loading && <Loader />}
      {error && <Error error={error} />}
      {posts && (
        <>
          <ul className="list">
            {posts.map((post, index) => (
              <li className="list-item" key={post.id}>
                {/* <Link className="list-item-title" to={`${post.id}`}>
                  {(index + 1) + (currentPage - 1) * postsPerPage}. {post.title}
                </Link> */}
                <div className="list-item-title" onClick={() => navigate(`${post.id}`, {state: {page: currentPage, limit: postsPerPage}})}>
                  {index + 1 + (currentPage - 1) * postsPerPage}. {post.title}
                </div>
                <button className="btn">
                  <Link
                    className="btn-link"
                    id={post.id}
                    to={`/posts/${post.id}/edit`}
                  >
                    Edit Post
                  </Link>
                </button>
              </li>
            ))}
          </ul>
          <Pagination
            pageCount={countPages}
            setPage={setCurrentPage}
            currentPage={currentPage}
            limit={postsPerPage}
          />
        </>
      )}
    </>
  )
}

export { BlogPage }
