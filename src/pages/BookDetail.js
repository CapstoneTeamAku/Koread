import React from "react";
import SideNav from "./Layout/SideNav";
import BookDetailPage from "./Layout/BookDetailPage";
const BookDetail = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "bestsellerBody"
  }, /*#__PURE__*/React.createElement(SideNav, null), /*#__PURE__*/React.createElement(BookDetailPage, {
    pageType: "bookdetail"
  }), " ");


  
};
  export default BookDetail;