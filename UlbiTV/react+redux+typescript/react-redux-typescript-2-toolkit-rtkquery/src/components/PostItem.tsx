import React, { FC } from "react"
import { IPost } from "../models/IPost"

interface PostItemProps {
  post: IPost
}

const PostItem: FC<PostItemProps> = ({ post }) => {
  return (
    <div className="post">
      <div className="post-info">
        <h3>
          <span>{post.id} - </span>
          {post.title}
        </h3>
        <p>{post.body}</p>
      </div>

      <button className="post-btn" onClick={() => {}}>
        Delete
      </button>
    </div>
  )
}

export default PostItem
