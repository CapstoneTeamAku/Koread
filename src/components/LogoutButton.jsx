import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/LogoutButton.css';

function LogoutButton({ isLoggedIn, onLogout}) {

    const handleClick = () => {
        if (isLoggedIn) {
            onLogout();
        } else {
            // 로그인 버튼을 클릭한 경우의 처리
            // ...
        }
    };
  
    return (
        <div>
            {isLoggedIn ? (
                <button onClick={handleClick} className="headerLogoutButton">
                    로그아웃
                </button>
            ) : (
                <button onClick={handleClick} className="headerLoginButton">
                    <Link to="/login" className="headerLoginLink">
                        로그인
                    </Link>
                </button>
            )}
        </div>
    );
}

export default LogoutButton;