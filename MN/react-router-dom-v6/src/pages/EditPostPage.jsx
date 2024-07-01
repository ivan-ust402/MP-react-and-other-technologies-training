import React from 'react';
import { useActionData, useLoaderData, useNavigation, useParams } from 'react-router-dom';
import { UpdatePost } from '../components/UpdatePost';

const EditPostPage = () => {
  // const {id} = useParams()
  const {id, post} = useLoaderData()
  const navigation = useNavigation()
  const actionData = useActionData()

  return (
    <div>
      {actionData?.message && <div style={{
        color: 'blue',
      }}>{actionData.message}</div>}
      <h1>Edit post ID={id}</h1>
      <UpdatePost {...post} submitting={navigation.state === 'submitting'}/>
    </div>
  );
}

const updatePost = async (post) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.get('id')}`, {
    method: 'PUT',
    body: post
  })
  return res.json()
}

const updatePostAction = async ({request}) => {
  const formData = await request.formData();
  // for (const pair of formData.entries()) {
  //   console.log(pair[0] + ': ' + pair[1])
  // }

  if (!formData.get('title') || !formData.get('body') ) {
    return {message: 'All fields are required!'}
  }

  const updatedPost = await updatePost(formData)

  return {message: `Post ${updatedPost.id} was successfully updated`}
}

export { EditPostPage, updatePostAction };
