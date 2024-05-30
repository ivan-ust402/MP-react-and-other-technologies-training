import React, { useState } from "react"
import { postAPI } from "../services/PostService"
import PostItem from "./PostItem"
import { FetchBaseQueryError } from "@reduxjs/toolkit/query"
import { SerializedError } from "@reduxjs/toolkit"
import { IError } from "../models/IError"


const PostConteiner = () => {
  const [limit, setLimit] = useState(10)
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(limit)
  console.log("data", posts)


  // if ('status' in error){
  //   // you can access all properties of `FetchBaseQueryError` here
  // } else {
  //   // you can access all properties of `SerializedError` here
  // }

  // console.log((error as SerializedError)?.message);
console.log((error as IError).error)

  console.log("isLoading", isLoading)
  /*

  TypeError: Failed to fetch
  
  {status: 'FETCH_ERROR', error: 'TypeError: Failed to fetch'}
  {status: 'FETCH_ERROR', error: 'TypeError: Failed to fetch'}
  */

  return (
    <div>
      <div className="post__list">
        {isLoading && <div>Идет загрузка постов...</div>}
        {error && <div>Произошла ошибка при загрузке постов!</div>}
        {posts &&
          posts.map((post, index) => <PostItem key={index} post={post} />)}
        <button onClick={() => setLimit(Number(prompt("Введите новый лимит постов: ")))}>Выбрать лимит постов</button>
      </div>
    </div>
  )
}

export default PostConteiner
