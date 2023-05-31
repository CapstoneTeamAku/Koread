import React, { useState } from 'react';
import '../../styles/PostLook.css';

function PostLook() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleChange = (value) => {
    setContent(value);
  };



  return (
    <div className="postLookContainer">

    </div>
  );
}

export default PostLook;