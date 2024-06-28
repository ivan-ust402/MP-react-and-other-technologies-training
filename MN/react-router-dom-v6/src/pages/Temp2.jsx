import React, { useState } from "react"
import {
  Link,
  useLoaderData,
  useLocation,
} from "react-router-dom"
import { Pagination } from "../components/Pagination"

const BlogPageUseLoader = () => {
  const location = useLocation()
  const {posts, allPosts} = useLoaderData()
  const totalPosts = allPosts.length

  // Параметры запроса для пагинации
  const searchParams = new URLSearchParams(location.search)
  const page = Number(searchParams.get("_page"))
  const limit = Number(searchParams.get("_limit"))

  const [currentPage, setCurrentPage] = useState(page ? page : 1)
  const postsPerPage = limit ? limit : 15

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
      {posts && (
        <>
          <ul className="list">
            {posts.map((post, index) => (
              <li className="list-item" key={post.id}>
                <Link
                  className="list-item-title"
                  to={`${post.id}`}
                  state={{ page: currentPage, limit: postsPerPage }}
                >
                  {index + 1 + (currentPage - 1) * postsPerPage}. {post.title}
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
          <Pagination
            pageCount={countPages}
            setPage={setCurrentPage}
            currentPage={currentPage}
            limit={postsPerPage}
            routePart={'posts-v2'}
          />
        </>
      )}
    </>
  )
}

const blogLoader = async ({ request, params }) => {
  const url = new URL(request.url)
  const page = url.searchParams.get("_page")
  const limit = url.searchParams.get("_limit")
  const totalPosts = await fetch("https://jsonplaceholder.typicode.com/posts")
  const allPosts = await totalPosts.json()

  const pagePosts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  )
  const posts = await pagePosts.json()

  return { posts, allPosts }
}

export { BlogPageUseLoader, blogLoader }