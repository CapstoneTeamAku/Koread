import React from "react";
import Header from "./Header";
import SideNav from "./SideNav";
import Main from "./Main";
import Footer from "./Footer";
import '../../styles/Layout.css';
const Layout = props => {
  if (props.type === "main" && props.state === "member") {
    return /*#__PURE__*/React.createElement("div", {
      className: "wrapper"
    }, /*#__PURE__*/React.createElement(Header, {
      state: "member"
    }), /*#__PURE__*/React.createElement(Main, null), /*#__PURE__*/React.createElement(Footer, null));
  } else if (props.type === "main" && props.state !== "member") {
    return /*#__PURE__*/React.createElement("div", {
      className: "wrapper"
    }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Main, null), /*#__PURE__*/React.createElement(Footer, null));
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(SideNav, null), /*#__PURE__*/React.createElement(Main, null), /*#__PURE__*/React.createElement(Footer, null));
};
export default Layout;