import React from "react";
import '../styles/NotFound.css';
const NotFound = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "errorBox"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "errorCode"
  }, "404"), /*#__PURE__*/React.createElement("span", {
    className: "errorMessage"
  }, "PAGE NOT FOUND"));
};
export default NotFound;