import React from "react"
import { Link, useNavigate, useLocation, useLoaderData } from "react-router-dom"
import PostCard from "../components/PostCard"

const PostPageUseLoader = () => {
  const navigate = useNavigate()
  const { state: locationState } = useLocation()
  const { post } = useLoaderData()

  return (
    <>
      <button
        onClick={() =>
          navigate(
            `/posts-v2?_page=${locationState.page}&_limit=${locationState.limit}`,
            { replace: false }
          )
        }
        className="btn"
      >
        Come back
      </button>
      <PostCard post={post} />
      <button className="btn">
        <Link className="btn-link" id={post.id} to={`/posts/${post.id}/edit`}>
          Edit Post
        </Link>
      </button>
    </>
  )
}

const postLoader = async ({ request, params }) => {
  const id = params.id
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = await res.json()

  return { post, id }
}

export { PostPageUseLoader, postLoader }
