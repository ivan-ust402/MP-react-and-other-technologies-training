import React from 'react';
import { useParams } from 'react-router-dom';

const EditPostPageForSearch = () => {
  const {id} = useParams()
  return (
    <div>
      <h1>Edit post ID={id}</h1>
    </div>
  );
}

export { EditPostPageForSearch };
