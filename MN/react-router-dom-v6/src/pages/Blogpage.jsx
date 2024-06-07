import React, { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import Loader from "../components/Loader"
import Error from "../components/Error"
import { Pagination } from "../components/Pagination"

const BlogPage = () => {
  const [posts, setPosts] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPosts, setTotalPosts] = useState(null)
  const postsPerPage = 15

  const memoizedTotalPosts = useMemo(() => {
    console.log("memoTotal")
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
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

    fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${postsPerPage}`
    )
      .then(async (response) => {
        await new Promise((res) => {
          setTimeout(res, 500)
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
                <Link className="list-item-title" to={`${post.id}`}>
                  {(index + 1) + (currentPage - 1) * postsPerPage}. {post.title}
                </Link>
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
          <Pagination pageCount={countPages} setPage={setCurrentPage} currentPage={currentPage}/>
        </>
      )}
    </>
  )
}

export { BlogPage }
