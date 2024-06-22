import React, { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import Loader from "../components/Loader"
import Error from "../components/Error"
import { PaginationForSearch } from "../components/PaginationForSearch"

const SearchPage = () => {
  // State of request
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState(null)
  const delay = 500

  // Get query params
  const [searchParams, setSearchParam] = useSearchParams()
  const postQuery = searchParams.get("search") || ""
  const latest = searchParams.has('latest')
  const page = Number(searchParams.get("_page")) || 1
  const limit = Number(searchParams.get("_limit")) || 15

  // State of greeting
  const [greeting, setGreeting] = useState(false)

  // State of inputs
  const [inputValue, setInputValue] = useState("")
  const [checkboxValue, setCheckboxValue] = useState(false)

  // State of pagination
  const [totalPosts, setTotalPosts] = useState(null)
  const countPages = Math.ceil(totalPosts / limit)

  // Variable to display the last 20 posts 
  const startsFrom = latest ? 80 : 1 
  /**
   * Simulate pagination function
   * @param {Array} posts 
   * @param {number} currPage 
   * @param {number} countPostsPerPage 
   * @returns Array
   */
  const calculatePostsPerPage = (posts, currPage, countPostsPerPage) => {
    const tempArr = []
    const start = (currPage - 1) * countPostsPerPage
    const finish =
      posts.length === 0
        ? posts.length
        : posts.length - (start + countPostsPerPage) > 0
        ? start + countPostsPerPage
        : posts.length
    for (let index = start; index < finish; index++) {
      tempArr.push(posts[index])
    }
    return tempArr
  }

  
  useEffect(() => {
    setGreeting(false)
    setLoading(true)
    setError("")
    setPosts(null)
    setInputValue("")
    setCheckboxValue(false)
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
          filteredPosts = []
          setGreeting(true)
        } else {
          filteredPosts = data.filter((post) => {
            return post.title.toLowerCase().includes(postQuery) && post.id > startsFrom
          })
          console.log(filteredPosts)
        }
        
        const pagePosts = calculatePostsPerPage(filteredPosts, page, limit)
        setLoading(false)
        setPosts(pagePosts)
        setTotalPosts(filteredPosts.length)
        setInputValue(postQuery)
        setCheckboxValue(latest)
      })
      .catch((e) => {
        setLoading(false)
        setError(e)
        setInputValue("")
      })
  }, [page, postQuery, limit, latest, startsFrom])

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const query = form.search.value
    const isLatest = form.latest.checked

    const params = {_page: 1, _limit: 15}
    if(query.length) params.search = query
    if(isLatest) params.latest = isLatest
    setSearchParam(params)
  }
  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="search"
          name="search"
          value={inputValue}
          onChange={(e) => {
            const filter = e.target.value
            setInputValue(filter)
          }}
        />
        <label className="label">
          <input type="checkbox" name="latest" checked={checkboxValue} onChange={(e) => {
            const filter = e.target.checked
            setCheckboxValue(filter)
          }}/>
          New only
        </label>
        <button className="search-btn btn" type="submit">
          Search
        </button>
      </form>
      {loading && <Loader text={'Loading...'}/>}
      {error && <Error />}
      {posts && (posts.length > 0 && !loading ? (
          <>
            <ul className="list">
              {posts.map((post, index) => (
                <li className="list-item" key={post.id}>
                  <Link
                    className="list-item-title"
                    to={`/search-posts/${post.id}`}
                    state={{
                      page,
                      limit,
                      search: postQuery,
                      latest
                    }}
                  >
                    {index + 1 + (page - 1) * limit}. {post.title}
                  </Link>
                  <button className="btn">
                    <Link
                      className="btn-link"
                      id={post.id}
                      to={`/search-posts/${post.id}/edit`}
                      state={{
                        page,
                        limit,
                        search: postQuery,
                        latest
                      }}
                    >
                      Edit Post
                    </Link>
                  </button>
                </li>
              ))}
            </ul>
            <PaginationForSearch
              pageCount={countPages}
              setPage={setSearchParam}
              currentPage={page}
              limit={limit}
              search={postQuery}
              latest={latest}
            />
          </>
        ) 
        : !greeting 
        ? (
          <div className="info-text">No posts were found matching your request.</div>
        )
        : <div className="info-text">Let's Try To Search!!!</div>)
      }
    </>
  )
}

export { SearchPage }
