import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import profile from '../assets/profile_200x200.png';
import '../styles/Login.css';

function LoginForm ({ onLogin }) {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        // 입력된 이메일과 비밀번호를 사용하여 로그인 처리 로직을 구현합니다.
        // 이 부분에서 백엔드와의 통신이 발생하거나 상태를 관리할 수 있습니다.
        // 예를 들어, axios를 사용하여 백엔드 API로 요청을 보내고, 응답을 처리할 수 있습니다.
        console.log('Email:', email);
        console.log('Password:', password);

        onLogin();
        // 로그인 후 메인 페이지로 리다이렉트
        navigate('/'); // navigate 함수를 사용하여 리다이렉트
    };

    return (
        <div className="loginBody">
            <div className="loginBox">
                <img alt="profileImg" src={profile} className="profileImg"/>
                <form onSubmit={handleSubmit} className="loginForm">
                    <div className="emailArea">
                        <span className="textEmail">이메일</span>
                        <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="inputEmail"
                        />
                    </div>
                    <div className="passwordArea">
                        <span className="textPassword">비밀번호</span>
                        <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="inputPassword"
                        />
                    </div>
                    <button type="submit">
                        로그인
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
