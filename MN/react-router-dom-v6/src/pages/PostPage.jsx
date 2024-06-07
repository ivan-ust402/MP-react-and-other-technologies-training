import React, { useEffect, useState } from "react"
import { Link, useParams, useNavigate, useLocation } from "react-router-dom"
import Loader from "../components/Loader"
import Error from "../components/Error"
import PostCard from "../components/PostCard"

const PostPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  console.log("post state", location.state)
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    setLoading(true)
    setError("")
    setPost(null)
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(async (response) => {
        await new Promise((resolve, reject) => {
          setTimeout(resolve, 500)
        })
        setLoading(false)
        setError("")
        return response.json()
      })
      .then((json) => setPost(json))
      .catch((e) => {
        setLoading(false)
        setPost(null)
        return setError(e.message)
      })
  }, [id])
  return (
    <>
      {loading && <Loader />}
      {error && <Error error={error} />}
      {post && (
        <>
          <button onClick={() => navigate('/posts', {replace: false, state: {page: location.state?.page ? location.state.page : 1, limit: location.state?.limit ? location.state.limit : 15}})} className="btn">
              Come back
          </button>
          <PostCard post={post} />
          <button className="btn">
            <Link
              className="btn-link"
              id={post.id}
              to={`/posts/${post.id}/edit`}
            >
              Edit Post
            </Link>
          </button>
        </>
      )}
    </>
  )
}

export { PostPage }
