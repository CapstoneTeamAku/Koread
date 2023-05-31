import React from "react";
import SideNav from "./Layout/SideNav";
import PostLookPage from "./Layout/PostLookPage";
const PostLook = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "bestsellerBody"
  }, /*#__PURE__*/React.createElement(SideNav, null), /*#__PURE__*/React.createElement(PostLookPage, {
    pageType: "postlook"
  }), " ");


  
};
  export default PostLook;