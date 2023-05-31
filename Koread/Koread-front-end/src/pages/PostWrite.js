import React from "react";
import SideNav from "./Layout/SideNav";
import PostWritePage from "./Layout/PostWritePage";
const PostWrite = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "bestsellerBody"
  }, /*#__PURE__*/React.createElement(SideNav, null), /*#__PURE__*/React.createElement(PostWritePage, {
    pageType: "postwrite"
  }), " ");


  
};
  export default PostWrite;