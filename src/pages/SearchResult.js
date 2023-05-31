import React from "react";
import SideNav from "./Layout/SideNav";
import SearchResultPage from "./Layout/SearchResultPage";
const SearchResult = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "bestsellerBody"
  }, /*#__PURE__*/React.createElement(SideNav, null), /*#__PURE__*/React.createElement(SearchResultPage, {
    pageType: "searchresult"
  }), " ");


  
};
  export default SearchResult;