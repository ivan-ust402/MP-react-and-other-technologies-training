import React, { Suspense } from "react"
import {
  Link,
  useNavigate,
  useLocation,
  useLoaderData,
  defer,
  Await,
  useAsyncValue,
} from "react-router-dom"
import PostCard from "../components/PostCard"
import Loader from "../components/Loader"

const Post = (id) => {
  const post = useAsyncValue()
  return (
    <>
      <PostCard post={post} />
      <button className="btn">
        <Link className="btn-link" id={post.id} to={`/posts/${id}/edit`}>
          Edit Post
        </Link>
      </button>
    </>
  )
}

const Comments = () => {
  const comments = useAsyncValue()

  return (
    <div className="comments">
      <h2>Comments:</h2>
      {comments.map(comment => (
        <div className="comments-block" key={comment.id}>
          <h3>{comment.email}</h3>
          <h4>{comment.name}</h4>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  )
}

const PostPageUseLoader = () => {
  const navigate = useNavigate()
  const { state: locationState } = useLocation()
  const { id, post, comments } = useLoaderData()

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
      <Suspense fallback={<Loader text={"Loading post..."} />}>
        <Await resolve={post} children={<Post id={id} />} />
      </Suspense>
      <Suspense fallback={<Loader text={"Loading comments..."} />}>
        <Await resolve={comments}>
          <Comments />
        </Await>
      </Suspense>
    </>
  )
}

async function getPostById(postId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  )
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 500)
  })
  const post = await res.json()
  return post
}

async function getCommentsById(postId) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 500)
  })
  return res.json()
}

const postLoader = async ({ params }) => {
  const id = params.id
  // return defer({
  //   id,
  //   post: getPostById(id),
  //   comments: getCommentsById(id)
  // })
  return {
    id,
    post: await getPostById(id),
    comments: getCommentsById(id)
  }
}

export { PostPageUseLoader, postLoader }
