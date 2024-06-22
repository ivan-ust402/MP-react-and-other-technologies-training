import React, { useEffect, useState } from "react"
import { Link, useParams, useNavigate, useLocation } from "react-router-dom"
import Loader from "../components/Loader"
import Error from "../components/Error"
import PostCard from "../components/PostCard"

const PostPageForSearch = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { state: locationState } = useLocation()
  // console.log("post state", locationState)
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
  console.log(locationState)
  return (
    <>
      {loading && <Loader />}
      {error && <Error error={error} />}
      {post && (
        <>
          <button 
            onClick={() => {
              locationState?.search 
              ? navigate(
                `/search-posts?_page=${locationState.page}&_limit=${locationState.limit}&search=${locationState.search}`,
                {
                  replace: false, 
                }
              )
              : navigate(
                `/search-posts?_page=${locationState.page}&_limit=${locationState.limit}`,
                {
                  replace: false, 
                }
              )
              } 
            }
            className="btn"
          >
              Come back
          </button>
          <PostCard post={post} />
          <button className="btn">
            <Link
              className="btn-link"
              id={post.id}
              to={`/search-posts/${post.id}/edit`}
            >
              Edit Post
            </Link>
          </button>
        </>
      )}
    </>
  )
}

export { PostPageForSearch }
