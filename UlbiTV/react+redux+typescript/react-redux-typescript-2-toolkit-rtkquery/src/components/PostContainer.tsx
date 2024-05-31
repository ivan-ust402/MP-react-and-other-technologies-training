import React, { useState } from "react"
import { postAPI } from "../services/PostService"
import PostItem from "./PostItem"

const PostConteiner = () => {
  const [limit, setLimit] = useState(5)
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(limit)
  /*
  TypeError: Failed to fetch

  {status: 'FETCH_ERROR', error: 'TypeError: Failed to fetch'}
  {status: 'FETCH_ERROR', error: 'TypeError: Failed to fetch'}
  */

  if (error && "status" in error && "error" in error) {
    // you can access all properties of `FetchBaseQueryError` here
    console.log("status: ", error.status)
    console.log("ERROR: ", error.error)
  } else {
    // you can access all properties of `SerializedError` here
  }


  return (
    <div>
      <div className="post__list">
        {isLoading && <div>Идет загрузка постов...</div>}
        {error && <div>Произошла ошибка при загрузке постов!</div>}
        {posts &&
          posts.map((post, index) => <PostItem key={index} post={post} />)}
        <button
          onClick={() =>
            setLimit(Number(prompt("Введите новый лимит постов: ")))
          }
        >
          Выбрать лимит постов
        </button>
      </div>
    </div>
  )
}

export default PostConteiner
