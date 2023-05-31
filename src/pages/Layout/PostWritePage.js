import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../styles/PostWrite.css';

function PostWrite() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleChange = (value) => {
    setContent(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.history.back();
    // 게시글 저장, 서버로 전송 로직을 추가해야 한다.
  };

  return (
    <div className="post-form-container">
      <h2>게시글 작성</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            placeholder='제목을 입력하세요:)'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">내용</label>
          <ReactQuill
            id="content"
            value={content}
            onChange={handleChange}
            style={{ width: '900px',  height: '600px' }}
          />
        </div>
        <div className="button-box">
        <button className='submit-button' onClick={handleSubmit}>작성완료</button>
        </div>
      </form>
    </div>
  );
}

export default PostWrite;