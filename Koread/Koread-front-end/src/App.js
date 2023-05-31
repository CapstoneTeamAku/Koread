import React, { useState } from "react";
import { Link, Routes, Route, Navigate, BrowserRouter as Router } from "react-router-dom";

import Header from './pages/Layout/Header';
import Footer from './pages/Layout/Footer';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Bestseller from './pages/Bestseller';
import New from './pages/New';
import Board from './pages/Board';
import BookDeatil from './pages/BookDetail';
import MyPage from './pages/MyPage';
import ChangePw from "./pages/ChangePw";
import SearchResult from "./pages/SearchResult";
import PostWrite from "./pages/PostWrite";
import PostLook from "./pages/PostLook";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isBestseller] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout}/> {/* props : state=member */}
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login/*" element={<Login onLogin={handleLogin} />}></Route>
          <Route path="/signup/*" element={<SignUp />}></Route>
          <Route path="/bestseller/*" element={<Bestseller pageType="bestseller" />}></Route> 
          <Route path="/new/*" element={<New />}></Route>
          <Route path="/board/*" element={<Board />}></Route> 
          <Route path="/bookdetail/*" element={<BookDeatil />}></Route>
          <Route path="/mypage/*" element={<MyPage />}></Route>  
          <Route path="/changepw/*" element={<ChangePw />}></Route> 
          <Route path="/searchresult/*" element={<SearchResult />}></Route> 
          <Route path="/postwrite/*" element={<PostWrite />}></Route> 
          <Route path="/postlook/*" element={<PostLook />}></Route> 
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는 경우 404 error처리*/}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      {/* 
      <Layout type="main" state="member"/> 
      props 값이
          type="main" 메인페이지인지 아닌지에 따른 2가지 Layout유형,
          state="member" 가입된 회원인지 아닌지에 따른 2가지 header유형
      */}
    </>
  );
}

export default App;
