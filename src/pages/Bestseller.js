import React from "react";
import SideNav from "./Layout/SideNav";
import BookList from "./Layout/BookList";
import '../styles/Bestseller.css';
const Bestseller = ({
  isBestseller
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "bestsellerBody"
  }, /*#__PURE__*/React.createElement(SideNav, null), /*#__PURE__*/React.createElement(BookList, {
    pageType: "bestseller",
    isBestseller: isBestseller
  }), " ");
};
export default Bestseller;