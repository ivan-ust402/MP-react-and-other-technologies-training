import React, { useState } from "react"
import { postAPIForJSONServer } from "../services/PostServiceForJsonServer"
import { IPostForJSONServer } from "../models/IPostForJSONServer"
import PostItemForJSONServer from "./PostItemForJSONServer"
import { nanoid } from "nanoid"

const PostConteinerForJSONServer = () => {
  const [limit, setLimit] = useState(100)
  const { data: posts, error, isLoading } = postAPIForJSONServer.useFetchAllPostsQuery(limit)
  const [createPost, {error: createPostError, isLoading: createPostIsLoading, isSuccess: createPostSuccess}] = postAPIForJSONServer.useCreatePostMutation()
  const [updatePost, {}] = postAPIForJSONServer.useUpdatePostMutation()
  const [deletePost, {}] = postAPIForJSONServer.useDeletePostMutation()


  if (error && "status" in error && "error" in error) {
    // you can access all properties of `FetchBaseQueryError` here
    console.log("status: ", error.status)
    console.log("ERROR: ", error.error)
  } else {
    // you can access all properties of `SerializedError` here
  }

  const handlePostCreator = async () => {
    const title = prompt("Введите название статьи: ")
    const body = prompt("Введите текст статьи: ")
    await createPost({id: nanoid(), title, body} as IPostForJSONServer)
  }

  return (
    <div>
      <div className="post__list">
        {isLoading && <div>Идет загрузка постов...</div>}
        {error && <div>Произошла ошибка при загрузке постов!</div>}
        {posts && <button
          onClick={handlePostCreator}
        >
          Добавить новый пост
        </button>}
        {posts && posts.map((post, index) => <PostItemForJSONServer key={index} index={index} post={post} remove={deletePost} update={updatePost} />).reverse()}
        {posts && <button
          onClick={() =>
            setLimit(Number(prompt("Введите новый лимит постов: ")))
          }
        >
          Выбрать лимит постов
        </button>}
      </div>
    </div>
  )
}

export default PostConteinerForJSONServer
