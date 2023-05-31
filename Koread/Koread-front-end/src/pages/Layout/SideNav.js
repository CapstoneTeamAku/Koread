import React from "react";
import { Link } from 'react-router-dom';
import '../../styles/SideNav.css';
const SideNav = props => {
  if (props.state === "off") {
    return null;
  }
  return /*#__PURE__*/React.createElement("nav", {
    className: "sideNavBar"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "navList"
  }, /*#__PURE__*/React.createElement("li", {
    className: "navListElement"
  }, /*#__PURE__*/React.createElement("div", {
    className: "navPageBox"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/bestseller",
    className: "navPageLink"
  }, "\uBCA0\uC2A4\uD2B8\uC140\uB7EC"))), /*#__PURE__*/React.createElement("li", {
    className: "navListElement"
  }, /*#__PURE__*/React.createElement("div", {
    className: "navPageBox"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/new",
    className: "navPageLink"
  }, "\uC2E0\uAC04\uB3C4\uC11C"))), /*#__PURE__*/React.createElement("li", {
    className: "navListElement"
  }, /*#__PURE__*/React.createElement("div", {
    className: "navPageBox"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/board",
    className: "navPageLink"
  }, /*#__PURE__*/React.createElement("span", null, "\uC790\uC720\uAC8C\uC2DC\uD310"))))));
};
export default SideNav;