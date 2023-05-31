import React from "react";
import SideNav from "./Layout/SideNav";
import PostList from "./Layout/PostList";
const Board = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "bestsellerBody"
  }, /*#__PURE__*/React.createElement(SideNav, null), /*#__PURE__*/React.createElement(PostList, {
    pageType: "board"
  }), " ");


  
};
  export default Board;