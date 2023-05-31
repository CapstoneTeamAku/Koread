import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profile from '../assets/profile_200x200.png';
import '../styles/Login.css';
function LoginForm({
  onLogin
}) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = e => {
    e.preventDefault();

    // 입력된 이메일과 비밀번호를 사용한 로그인 처리 로직 추가 필요 

    console.log('Email:', email);
    console.log('Password:', password);
    onLogin();
    // 로그인 후 메인 페이지로 리다이렉트
    navigate('/'); // navigate 함수를 사용하여 리다이렉트
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "loginBody"
  }, /*#__PURE__*/React.createElement("div", {
    className: "loginBox"
  }, /*#__PURE__*/React.createElement("img", {
    alt: "profileImg",
    src: profile,
    className: "profileImg"
  }), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "loginForm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "emailArea"
  }, /*#__PURE__*/React.createElement("span", {
    className: "textEmail"
  }, "\uC774\uBA54\uC77C"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "Email",
    value: email,
    onChange: e => setEmail(e.target.value),
    required: true,
    className: "inputEmail"
  })), /*#__PURE__*/React.createElement("div", {
    className: "passwordArea"
  }, /*#__PURE__*/React.createElement("span", {
    className: "textPassword"
  }, "\uBE44\uBC00\uBC88\uD638"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    placeholder: "Password",
    value: password,
    onChange: e => setPassword(e.target.value),
    required: true,
    className: "inputPassword"
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "\uB85C\uADF8\uC778"))));
}
;
export default LoginForm;