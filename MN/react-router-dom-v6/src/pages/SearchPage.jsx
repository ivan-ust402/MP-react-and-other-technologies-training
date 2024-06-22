import React, { useEffect, useState } from "react"
import { Link, useLocation, useSearchParams } from "react-router-dom"
import Loader from "../components/Loader"
import Error from "../components/Error"
import { Pagination } from "../components/Pagination"
import { PaginationForSearch } from "../components/PaginationForSearch"

const SearchPage = () => {
  const location = useLocation()
  console.log(location)
  // State of request
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState(null)
  const delay = 500

  // Get query params
  const [searchParams, setSearchParam] = useSearchParams()
  const postQuery = searchParams.get("search") || ""
  const page = Number(searchParams.get('_page')) || 1
  const limit = Number(searchParams.get('_limit')) || 15

  // State of pagination
  const [currentPage, setCurrentPage] = useState(page)
  const [postsPerPage, setPostsPerPage] = useState(limit)
  const [totalPosts, setTotalPosts] = useState(null)
  const countPages = Math.ceil(totalPosts / postsPerPage)

  const calculatePostsPerPage = (posts, page, countPostsPerPage) => {
    const tempArr = []
    const start = (currentPage - 1) * postsPerPage
    const finish = posts.length === 0 ? posts.length :
      posts.length - (start + postsPerPage) > 0
        ? start + postsPerPage - 1
        : posts.length - 1
    for (let index = start; index < finish; index++) {
      tempArr.push(posts[index])
    }
    return tempArr
  }

  useEffect(() => {
    setLoading(true)
    setError("")
    setPosts(null)

    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(async (response) => {
        await new Promise((res) => {
          setTimeout(res, delay)
        })
        setLoading(false)
        setError("")
        return response.json()
      })
      .then((data) => {
        let filteredPosts = null
        if (postQuery === "") {
          filteredPosts = data
        } else {
          filteredPosts = data.filter((post) => {
            return post.title.toLowerCase().includes(postQuery)
          })
        }
        const pagePosts = calculatePostsPerPage(filteredPosts, currentPage, postsPerPage)
        setLoading(false)
        setPosts(pagePosts)
        setTotalPosts(filteredPosts.length)
      })
      .catch((e) => {
        setLoading(false)
        setError(e)
      })
  }, [currentPage, postQuery, postsPerPage])



  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const query = form.search.value
    setSearchParam({ _page: 1, _limit: 15, search: query })
  }
  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <input className="search-input" type="search" name="search" />
        <button className="search-btn btn" type="submit">
          Search
        </button>
      </form>
      {loading && <Loader />}
      {error && <Error />}
      {posts && ((posts.length > 0 && !loading ) ? (
        <>
          <ul className="list">
            {posts.map((post, index) => (
              <li className="list-item" key={post.id}>
                <Link
                  className="list-item-title"
                  to={`/search-posts/${post.id}`}
                  state={{ page: currentPage, limit: postsPerPage, search: postQuery }}
                >
                  {index + 1 + (currentPage - 1) * postsPerPage}. {post.title}
                </Link>
                <button className="btn">
                  <Link
                    className="btn-link"
                    id={post.id}
                    to={`/search-posts/${post.id}/edit`}
                    state={{page: currentPage, limit: postsPerPage, search: postQuery}}
                  >
                    Edit Post
                  </Link>
                </button>
              </li>
            ))}
          </ul>
          <PaginationForSearch
            pageCount={countPages}
            setPage={setCurrentPage}
            currentPage={currentPage}
            limit={postsPerPage}
            search = {postQuery}
          />
        </>
      )
      : <div>No posts were found matching your request.</div>
    )}
    </>
  )
}

export { SearchPage }
