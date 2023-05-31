import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import LogoutButton from '../LogoutButton';
import searchIconNavy from '../../assets/search_icon_navy.png';
import '../../styles/Header.css';
function Header({
  isLoggedIn,
  onLogout
}) {
  const navigate = useNavigate();
  const handleLogout = () => {
    onLogout(); // 전달받은 onLogout 함수로 로그아웃 상태 변경

    // 로그아웃 후 메인 페이지로 리다이렉트
    navigate('/'); // navigate 함수를 사용하여 리다이렉트
  };

  return /*#__PURE__*/React.createElement("header", {
    className: "header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "headerWrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "headerLogoArea"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/",
    className: "headerLogoHomeLink"
  }, /*#__PURE__*/React.createElement("span", {
    className: "koread"
  }, "KO"), "READ")), /*#__PURE__*/React.createElement("div", {
    className: "searchArea"
  }, /*#__PURE__*/React.createElement("div", {
    className: "searchBox"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "\uC774\uACF3\uC5D0\uC11C \uC6D0\uD558\uB294 \uCC45\uC744 \uCC3E\uC544\uBCF4\uC138\uC694!",
    className: "searchBar"
  }), <a href="/searchresult">
      <img alt="search_icon" src={searchIconNavy} className="searchIcon" />
</a>)), /*#__PURE__*/React.createElement("ul", {
    className: "joinArea"
  }, isLoggedIn ? /*#__PURE__*/React.createElement("li", {
    className: "headerUserIdBox"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/mypage",
    className: "headerMyPageLink"
  }, /*#__PURE__*/React.createElement("span", {
    className: "userID"
  }, "UserID#0001"))) : /*#__PURE__*/React.createElement("li", {
    className: "headerSignUpBox"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/signup",
    className: "headerSignUpLink"
  }, /*#__PURE__*/React.createElement("span", {
    className: "headerSignUpText"
  }, "\uD68C\uC6D0\uAC00\uC785"))), isLoggedIn ? /*#__PURE__*/React.createElement("li", {
    className: "headerLogoutBox"
  }, /*#__PURE__*/React.createElement(LogoutButton, {
    isLoggedIn: isLoggedIn,
    onLogout: handleLogout
  })) : /*#__PURE__*/React.createElement("li", {
    className: "headerLoginBox"
  }, /*#__PURE__*/React.createElement(LogoutButton, {
    isLoggedIn: isLoggedIn
  })))));
}
export default Header;