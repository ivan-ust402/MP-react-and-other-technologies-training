import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loader from "../components/Loader"
import Error from "../components/Error"

const BlogPage = () => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError("")
    setPosts([])

    fetch("https://jsonplaceholder.typicode.com/posts?_limit=20")
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
  }, [])
  return (
    <>
      <h1>Our company posts and articles</h1>
      <div className="controls">
        <button className="btn"><Link className="btn-link" to={"/posts/create"}>Create New Post</Link></button>
      </div>
      {loading && <Loader />}
      {error && <Error error={error} />}
      {posts && (
        <ul className="list">
          {posts.map((post, index) => (
            <li className="list-item" key={post.id}>
              <Link className="list-item-title" to={`${post.id}`}>
                {index + 1}. {post.title} 
              </Link>
              <button className="btn"><Link className="btn-link" id={post.id} to={`/posts/${post.id}/edit`}>Edit Post</Link></button>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export { BlogPage }
