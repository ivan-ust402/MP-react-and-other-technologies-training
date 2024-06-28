import React, { Suspense, useState } from "react"
import {
  Link,
  useLoaderData,
  useLocation,
  Await,
  defer,
} from "react-router-dom"
import { Pagination } from "../components/Pagination"
import Loader from "../components/Loader"

const BlogPageUseLoader = () => {
  const location = useLocation()
  const { posts, allPosts } = useLoaderData()
  const totalPosts = 100
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
      <Suspense fallback={<Loader text={'Loading...'}/>}>
        <Await resolve={posts}>
          {(resolvedPosts) => (
              <ul className="list">
                {resolvedPosts.map((post, index) => (
                  <li className="list-item" key={post.id}>
                    <Link
                      className="list-item-title"
                      to={`${post.id}`}
                      state={{ page: currentPage, limit: postsPerPage }}
                    >
                      {index + 1 + (currentPage - 1) * postsPerPage}.{" "}
                      {post.title}
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
          )}
        </Await>
        <Await resolve={allPosts} children={<Pagination
                pageCount={countPages}
                setPage={setCurrentPage}
                currentPage={currentPage}
                limit={postsPerPage}
                routePart={"posts-v2"}
              />} />
      </Suspense>
    </>
  )
}

async function getPosts(inputPage, inputLimit) {
  const pagePosts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${inputPage}&_limit=${inputLimit}`
  )
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 500)
  })
  return pagePosts.json()
}

async function getAllPosts() {
  const totalPosts = await fetch("https://jsonplaceholder.typicode.com/posts")
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 500)
  })
  return totalPosts.json()
}

const blogLoader = async ({ request }) => {
  const url = new URL(request.url)
  const page = url.searchParams.get("_page")
  const limit = url.searchParams.get("_limit")
  return defer({ 
    posts: getPosts(page, limit), 
    allPosts: getAllPosts()
  })
}

export { BlogPageUseLoader, blogLoader }


