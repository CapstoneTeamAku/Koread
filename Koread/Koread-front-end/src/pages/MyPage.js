import React from "react";
import SideNav from "./Layout/SideNav";
import MyPagePage from "./Layout/MyPagePage";
const MyPage = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "bestsellerBody"
  }, /*#__PURE__*/React.createElement(SideNav, null), /*#__PURE__*/React.createElement(MyPagePage, {
    pageType: "mypage"
  }), " ");


  
};
  export default MyPage;