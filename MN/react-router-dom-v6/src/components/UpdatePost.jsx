import React from "react"
import { Form } from "react-router-dom"

const UpdatePost = ({ id, title, body, userId, submitting }) => {
  return (
    <Form className="form" method="post" action={`/posts/${id}/edit`}>
      <label className="label">
        Title:
        <input
          className="input"
          type="text"
          name="title"
          defaultValue={title}
        />
      </label>
      <label className="label">
        Text:
        <input className="input" type="text" name="body" defaultValue={body} />
      </label>
      <input type="hidden" name="userId" value={userId} />
      <input type="hidden" name="id" value={id} />
      <input
        className="btn"
        type="submit"
        value="Edit post"
        disabled={submitting}
      />
    </Form>
  )
}

export { UpdatePost }
