import React from "react"

const PostCard = ({ post }) => {
  return (
    <>
      <div className="post-card">
        <h1 className="post-card__title">{post.title}</h1>
        <p className="post-card__body">{post.body}</p>
      </div>
      <div className="post-card__footer">
        <div className="post-card__footer-item">We're on page ID={post.id}</div>
        <div className="post-card__footer-item">This post was written by userId={post.userId}</div>
      </div>
    </>
  )
}

export default PostCard
