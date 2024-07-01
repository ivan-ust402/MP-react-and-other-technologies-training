import React from 'react';
import { NewPost } from '../components/NewPost';
import { redirect, useNavigation } from 'react-router-dom';

const CreatePostPage = () => {
  const navigation = useNavigation()
  return (
    <div className='create-post'>
      <h1>Create post</h1>
      <NewPost submitting={navigation.state === 'submitting'}/>
    </div>
  );
}

const createPost = async ({title, body, userId}) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {'Content-Type': 'application/json; charset=UTF-8'},
    body: JSON.stringify({title, body, userId})
  })
  const newPost = await res.json()
  return newPost
}

const createPostAction = async ({request}) => {
  const formData = await request.formData();
  const newPost = {
    title: formData.get("title"),
    body: formData.get('body'),
    userId: formData.get('userId')
  }
  const post = await createPost(newPost)
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 500)
  })

  return redirect('/posts/' + post.id, )
}

export { CreatePostPage, createPostAction };
