import React, { FC } from "react"
import { IPostForJSONServer } from "../models/IPostForJSONServer"
interface PostItemProps {
  index: number;
  post: IPostForJSONServer;
  remove: (post: IPostForJSONServer) => void;
  update: (post: IPostForJSONServer) => void;
}

const PostItemForJSONServer: FC<PostItemProps> = ({ index, post, remove, update }) => {
  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation()
    remove(post)
  }

  const handleUpdate = (event: React.MouseEvent) => {
    const title = prompt("Введите новое название заголовка: ") || ""
    const body = prompt("Введите новое содержание поста: ") || ""
    event.stopPropagation()
    update({...post, title, body})
  }

  return (
    <div className="post">
      <div onClick={handleUpdate} className="post-info">
        <h3>
          <span>{index + 1} - </span>
          {post.title}
        </h3>
        <p>{post.body}</p>
      </div>

      <button className="post-btn" onClick={handleRemove}>
        Delete
      </button>
    </div>
  )
}

export default PostItemForJSONServer
