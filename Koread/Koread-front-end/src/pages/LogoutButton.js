import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LogoutButton.css';
function LogoutButton({
  isLoggedIn,
  onLogout
}) {
  const handleClick = () => {
    if (isLoggedIn) {
      onLogout();
    } else {
      // 로그인 버튼을 클릭한 경우의 처리
      // ...
    }
  };
  return /*#__PURE__*/React.createElement("div", null, isLoggedIn ? /*#__PURE__*/React.createElement("button", {
    onClick: handleClick,
    className: "headerLogoutButton"
  }, "\uB85C\uADF8\uC544\uC6C3") : /*#__PURE__*/React.createElement("button", {
    onClick: handleClick,
    className: "headerLoginButton"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/login",
    className: "headerLoginLink"
  }, "\uB85C\uADF8\uC778")));
}
export default LogoutButton;