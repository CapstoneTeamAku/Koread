import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bannerImg01 from '../assets/banner.png';
import plusIcon from '../assets/plus_icon_black.png';
import '../styles/Main.css';

const Main = () => {
  const [bookInfo, setBookInfo] = useState({});
  const [bookInfo2, setBookInfo2] = useState([]);
  const [loadingBookInfo, setLoadingBookInfo] = useState(true);
  const [loadingNewBook,setLoadingNewBook] = useState(true);

  useEffect(() => {
    getBookInfo();
    getNewBooks();
  }, []);

  const getBookInfo = async () => {
    setLoadingBookInfo(true);
    try {
      const res = await fetch(
        `http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbferamt3081706002&QueryType=Bestseller&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20131101`
      );

      const response = await res.text();
      const parser = new window.DOMParser();
      const xmlDOM = parser.parseFromString(response, 'text/xml');
      setBookInfo(xmlDOM);
      setLoadingBookInfo(false);
    } catch (error) {
      window.alert('API 호출 에러!');
    }
  };

  const getNewBooks = async () => {
    setLoadingNewBook(true);
    try {
      const res = await fetch(
        `http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbferamt3081706002&QueryType=ItemNewAll&MaxResults=5&start=1&SearchTarget=Book&output=xml&Version=20131101`
      );

      const response = await res.text();
      const parser = new window.DOMParser();
      const xmlDOM = parser.parseFromString(response, 'text/xml');

      const books = xmlDOM.querySelectorAll('item');
      const bookList = Array.from(books).map((book) => ({
        title: book.querySelector('title').textContent,
        author: book.querySelector('author').textContent,
        cover: book.querySelector('cover').textContent,
        publisher: book.querySelector('publisher').textContent,
        link: book.querySelector('link').textContent,
      }));

      setBookInfo2(bookList);
      setLoadingNewBook(false);
    } catch (error) {
      window.alert('API 호출 에러!');
    }
  };

 

  
  return (
    <div>
    {loadingNewBook || loadingBookInfo ? <div>로딩중</div> : null}
    {!(loadingNewBook || loadingBookInfo) ? (
    <main className="main">
      <div className="middleBannerArea">
        <div className="middleBanner">
          <img alt="star_rail" src={bannerImg01} className="bannerImg01" />
        </div>
      </div>
      <div className="bookContentArea">
        <div className="bestsellerArea">
          <div className="bestsellerWrapTitle">
            <Link to="/bestseller" className="bestsellerTitleLink">
              <span>베스트셀러</span>
              <img alt="plusIcon" src={plusIcon} className="mainPlusIcon" />
            </Link>
          </div>
          <div className="bestsellerContainer">
            <ul className="bestsellerList">
              <li className="liBestseller">
                <div className="smallCoverImage">
                <a href={bookInfo.querySelectorAll("item link")[0].textContent} target="_blank" rel="noopener noreferrer">
                  <img src={bookInfo.querySelectorAll("item cover")[0].textContent} />
                  </a>
                </div>
                <div className="smallBooksInfo">
                  <p className='smallBooksInfoTitle'>{bookInfo.querySelectorAll("item title")[0].textContent}</p>
                  <p>{bookInfo.querySelectorAll("item author")[0].textContent}</p>
                  <p>{bookInfo.querySelectorAll("item publisher")[0].textContent}</p>
                </div>
              </li>
              <li className="liBestseller">
                <div className="smallCoverImage">
                <a href="/bookdetail">
                  <img src={bookInfo.querySelectorAll("item cover")[1].textContent} />
                  </a>
                </div>
                <div className="smallBooksInfo">
                <p className='smallBooksInfoTitle'>{bookInfo.querySelectorAll("item title")[1].textContent}</p>
                  <p>{bookInfo.querySelectorAll("item author")[1].textContent}</p>
                  <p>{bookInfo.querySelectorAll("item publisher")[1].textContent}</p>
                </div>
              </li>
              <li className="liBestseller">
              <div className="smallCoverImage">
                <a href={bookInfo.querySelectorAll("item link")[2].textContent} target="_blank" rel="noopener noreferrer">
                  <img src={bookInfo.querySelectorAll("item cover")[2].textContent} />
                  </a>
                </div>
                <div className="smallBooksInfo">
                <p className='smallBooksInfoTitle'>{bookInfo.querySelectorAll("item title")[2].textContent}</p>
                <p>{bookInfo.querySelectorAll("item author")[2].textContent}</p>
                <p>{bookInfo.querySelectorAll("item publisher")[2].textContent}</p>
                </div>
              </li>
              <li className="liBestseller">
              <div className="smallCoverImage">
                <a href={bookInfo.querySelectorAll("item link")[3].textContent} target="_blank" rel="noopener noreferrer">
                  <img src={bookInfo.querySelectorAll("item cover")[3].textContent} />
                  </a>
                </div>
                <div className="smallBooksInfo">
                <p className='smallBooksInfoTitle'>{bookInfo.querySelectorAll("item title")[3].textContent}</p>
                  <p>{bookInfo.querySelectorAll("item author")[3].textContent}</p>
                  <p>{bookInfo.querySelectorAll("item publisher")[3].textContent}</p>
                </div>
              </li>
              <li className="liBestseller">
                <div className="smallCoverImage">
                <a href={bookInfo.querySelectorAll("item link")[4].textContent} target="_blank" rel="noopener noreferrer">
                  <img src={bookInfo.querySelectorAll("item cover")[4].textContent} />
                  </a>
                </div>
                <div className="smallBooksInfo">
                <p className='smallBooksInfoTitle'>{bookInfo.querySelectorAll("item title")[4].textContent}</p>
                  <p>{bookInfo.querySelectorAll("item author")[4].textContent}</p>
                  <p>{bookInfo.querySelectorAll("item publisher")[4].textContent}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>


      
         <div className="newBooksArea">
        <div className="newBooksWrapTitle">
          <Link to="/new" className="newBooksTitleLink">
            <span>신간도서</span>
            <img alt="plusIcon" src={plusIcon} className="mainPlusIcon" />
          </Link>
        </div>
        <div className="newBooksContainer">
          <ul className="newBooksList">
            <li className="liNewBooks">
            <div className="smallCoverImage">
              <a href={bookInfo2[0].link} target="_blank" rel="noopener noreferrer">
               <img src={bookInfo2[0].cover} alt="book cover" />
              </a>

            </div>
              <div className="smallBooksInfo">
                <p className='smallBooksInfoTitle'> {bookInfo2[0].title}</p>
                <p>{bookInfo2[0].author}</p>
                <p>{bookInfo2[0].publisher}</p>
              </div>
            </li>
            <li className="liNewBooks">
              <div className="smallCoverImage">
              <a href={bookInfo2[1].link} target="_blank" rel="noopener noreferrer">
              <img src={bookInfo2[1].cover} alt="book cover" />
              </a>
            </div>
              <div className="smallBooksInfo">
                <p className='smallBooksInfoTitle'> {bookInfo2[1].title}</p>
                <p>{bookInfo2[1].author}</p>
                <p>{bookInfo2[1].publisher}</p>
              </div>
            </li>
            <li className="liNewBooks">
              <div className="smallCoverImage">
              <a href={bookInfo2[2].link} target="_blank" rel="noopener noreferrer">
              <img src={bookInfo2[2].cover} alt="book cover" />
              </a>
            </div>
              <div className="smallBooksInfo">
                <p className='smallBooksInfoTitle'> {bookInfo2[2].title}</p>
                <p>{bookInfo2[2].author}</p>
                <p>{bookInfo2[2].publisher}</p>
              </div>
            </li>
            <li className="liNewBooks">
              <div className="smallCoverImage">
              <a href={bookInfo2[3].link} target="_blank" rel="noopener noreferrer">
              <img src={bookInfo2[3].cover} alt="book cover" />
              </a>
            </div>
              <div className="smallBooksInfo">
                <p className='smallBooksInfoTitle'> {bookInfo2[3].title}</p>
                <p>{bookInfo2[3].author}</p>
                <p>{bookInfo2[3].publisher}</p>
              </div>
            </li>
            <li className="liNewBooks">
              <div className="smallCoverImage">
              <a href={bookInfo2[4].link} target="_blank" rel="noopener noreferrer">
              <img src={bookInfo2[4].cover} alt="book cover" />
              </a>
            </div>
              <div className="smallBooksInfo">
                <p className='smallBooksInfoTitle'> {bookInfo2[4].title}</p>
                <p>{bookInfo2[4].author}</p>
                <p>{bookInfo2[4].publisher}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="boardArea"> 
        <div className="boardWrap">
          <div className="boardTitle">
            <Link to="/board" className="boardTitleLink">
              <span className="boardText">게시판</span>
              <img alt="plusIcon" src={plusIcon} className="mainPlusIcon" />
            </Link>
          </div>
          <div className="boardContainer">
            <ul className="boardList">
              <li className="postLine">
                <div className="postContent">
                  <ul className="postTop">
                    <li className="postNum liCenter">글번호</li>
                    <li className="postTitle liCenter">제목</li>
                    <li className="postUser liCenter">작성자</li>
                    <li className="postDate liCenter">작성일</li>
                    <li className="postView liCenter">조회수</li>
                    <li className="postLike liCenter">추천</li>
                  </ul>
                </div>
              </li>
            </ul>
    </div>
    </div>
    </div>
    </main>
          ) : <div>Error!</div>}
          </div>
  );
};
export default Main;