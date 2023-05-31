import React from "react"
import {Link} from 'react-router-dom';
import bannerImg01 from '../assets/star_rail_820x360.png'
import plusIcon from '../assets/plus_icon_black.png'
import '../styles/Main.css';

const Main = () => {
    return (
        <main className="main">
            <div className="middleBannerArea">
                <div className="middleBanner">
                    <img alt="star_rail" src={bannerImg01} className="bannerImg01"/>
                </div>
            </div>
            <div className="bookContentArea">
                                {/* 베스트셀러 */}
                <div className="bestsellerArea">
                    <div className="bestsellerWrapTitle">
                        <Link to="/bestseller" className="bestsellerTitleLink">
                            <span>베스트셀러</span>
                            <img alt="plusIcon" src={plusIcon} className="mainPlusIcon"/>
                        </Link>    
                    </div>
                    <div className="bestsellerContainer">
                        <ul className="bestsellerList">
                            <li className="liBestseller">
                                <div className="smallCoverImage">img</div>
                                <div className="smallBooksInfo">
                                    <p>카테고리</p>
                                    <p>책 제목</p>
                                    <p>저자 / 출판사</p>
                                </div>
                            </li>
                            <li className="liBestseller">
                                <div className="smallCoverImage">img</div>
                                <div className="smallBooksInfo">
                                    <p>카테고리</p>
                                    <p>책 제목</p>
                                    <p>저자 / 출판사</p>
                                </div>
                            </li>
                            <li className="liBestseller">
                                <div className="smallCoverImage">img</div>
                                <div className="smallBooksInfo">
                                    <p>카테고리</p>
                                    <p>책 제목</p>
                                    <p>저자 / 출판사</p>
                                </div>
                            </li>
                            <li className="liBestseller">
                                <div className="smallCoverImage">img</div>
                                <div className="smallBooksInfo">
                                    <p>카테고리</p>
                                    <p>책 제목</p>
                                    <p>저자 / 출판사</p>
                                </div>
                            </li>
                            <li className="liBestseller">
                                <div className="smallCoverImage">img</div>
                                <div className="smallBooksInfo">
                                    <p>카테고리</p>
                                    <p>책 제목</p>
                                    <p>저자 / 출판사</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                                {/* 신간 도서 */}
                <div className="newBooksArea">
                    <div className="newBooksWrapTitle">
                        <Link to="/new" className="newBooksTitleLink">
                            <span>신간도서</span>
                            <img alt="plusIcon" src={plusIcon} className="mainPlusIcon"/>
                        </Link>
                    </div>
                    <div className="newBooksContainer">
                        <ul className="newBooksList">
                            <li className="liNewBooks">
                                <div className="smallCoverImage">img</div>
                                <div className="smallBooksInfo">
                                    <p>카테고리</p>
                                    <p>책 제목</p>
                                    <p>저자 / 출판사</p>
                                </div>
                            </li>
                            <li className="liBestseller">
                                <div className="smallCoverImage">img</div>
                                <div className="smallBooksInfo">
                                    <p>카테고리</p>
                                    <p>책 제목</p>
                                    <p>저자 / 출판사</p>
                                </div>
                            </li>
                            <li className="liBestseller">
                                <div className="smallCoverImage">img</div>
                                <div className="smallBooksInfo">
                                    <p>카테고리</p>
                                    <p>책 제목</p>
                                    <p>저자 / 출판사</p>
                                </div>
                            </li>
                            <li className="liBestseller">
                                <div className="smallCoverImage">img</div>
                                <div className="smallBooksInfo">
                                    <p>카테고리</p>
                                    <p>책 제목</p>
                                    <p>저자 / 출판사</p>
                                </div>
                            </li>
                            <li className="liBestseller">
                                <div className="smallCoverImage">img</div>
                                <div className="smallBooksInfo">
                                    <p>카테고리</p>
                                    <p>책 제목</p>
                                    <p>저자 / 출판사</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
                                {/* 자유게시판 */}
            <div className="boardArea">
                <div className="boardWrap">
                    <div className="boardTitle">
                        <Link to="/board" className="boardTitleLink">
                            <span className="boardText">자유게시판</span>
                            <img alt="plusIcon" src={plusIcon} className="mainPlusIcon"/>
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
                                        <li className="postDate liCenter">게시일</li>
                                        <li className="postView liCenter">조회수</li>
                                        <li className="postLike liCenter">추천</li>
                                    </ul>

                                    {/*posts.map(post => (
                                        <div className='post' key={post.id}>
                                        <div className='post-item'>{post.id}</div>
                                        <div className='post-item'>{post.title}</div>
                                        <div className='post-item'>{post.author}</div>
                                        <div className='post-item'>{post.date}</div>
                                        <div className='post-item'>{post.views}</div>
                                        <div className='post-item'>{post.likes}</div>
                                        </div>
                                    ))*/}
                                </div>
                            </li>
                        </ul>
                    </div>                
                </div>    
            </div>        
        </main>
    )
}

export default Main