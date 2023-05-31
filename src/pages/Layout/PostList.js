//Board.js와 연결되는 파일
//댓글 기능, 게시글 조회기능 추가 필요
import React, { useEffect, useState } from 'react';

import '../../styles/Board.css';

let BookNumber = 0;
let PageName = "";
let PageTitle = "";

const PostList = props => {
    if (props.pageType === "Board") {
        PageName = "board";
        PageTitle = "게시판";
      }
  const [bookInfo, setBookInfo] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://www.aladin.co.kr/ttb/api/ItemLookUp.aspx?ttbkey=ttbferamt3081706002&itemIdType=ISBN13&ItemId=9791130699738')
      .then(response => response.json())
      .then(data => setBookInfo(data));
  }, []);

  useEffect(() => {
    // 데이터베이스에서 게시글 정보를 가져오는 기능
    const fetchedPosts = [
      { id: 1, title: '게시글 1', author: '작성자 1', date: '2023-05-18', views: 10, likes: 5 },
      { id: 2, title: '게시글 2', author: '작성자 2', date: '2023-05-17', views: 8, likes: 3 },
      // ... 한 페이지에 20개 까지 추가(페이지 넘기는 기능 미구현)
    ];
    setPosts(fetchedPosts);
  }, []);
  function handleGoWrite(){
    window.location.href ="/postwrite"
  }
  function handleGoLook(){
    window.location.href ="/postlook"
  }

  function handleGoback(){
    window.history.back();
  }
  

  return (

      <div className='BoardContainer'>
        <button className='back-button' onClick={handleGoback}></button>
        <div className='text'>
          <h2>자유게시판</h2>
        </div>
        <div className='content'>
          <div className='head'>
            <div className='header-item'>번호</div>
            <div className='header-item'>제목</div>
            <div className='header-item'>작성자</div>
            <div className='header-item'>작성일</div>
            <div className='header-item'>조회수</div>
            <div className='header-item'>추천</div>
          </div>
          {posts.map(post => (
            <div className='post' key={post.id}>
              <div className='post-item-num'>{post.id}</div>
              <div className='post-item-title' onClick={handleGoLook}>{post.title} </div>
              <div className='post-item-writer'>{post.author}</div>
              <div className='post-item-writedate'>{post.date}</div>
              <div className='post-item-views'>{post.views}</div>
              <div className='post-item-recommend'>{post.likes}</div>
            </div>
          ))}


        </div>       

        <button className='writebtn' onClick={handleGoWrite}>글쓰기</button>
      </div>

  );
}



export default PostList;