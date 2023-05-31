import React from "react";
import SideNav from "./Layout/SideNav";
import BookList from "./Layout/BookList";
import '../styles/New.css';
const New = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "newBody"
  }, /*#__PURE__*/React.createElement(SideNav, null), /*#__PURE__*/React.createElement(BookList, {
    pageType: "new"
  }), " ");
};
export default New;