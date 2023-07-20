import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {
  const [ title, setTitle ] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:4000/posts', {
        title
      });
    } catch (error) {
      console.log(error);
    }

    setTitle('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="title">Title</label>
          <input 
            name='title' 
            type="text" 
            className='form-control' 
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;