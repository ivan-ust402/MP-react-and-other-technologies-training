import React from 'react';
import { Form } from 'react-router-dom';

const NewPost = ({submitting}) => {
  return (
    <Form className="form" action='/posts/create' method='post'>
      <label className='label'>
        Title: 
        <input className='input' type='text' name='title'/>
      </label>
      <label className='label'>
        Text: 
        <input className='input' type='text' name='body'/>
      </label>
      <input type="hidden" name='userId' value="1"/>
      <input className="btn" type="submit" value="Add post" disabled={submitting}/>
    </Form>
  );
}

export { NewPost };
