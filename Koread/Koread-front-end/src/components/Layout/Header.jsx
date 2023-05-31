import React from "react";
import {Link, useNavigate} from 'react-router-dom';
import LogoutButton from '../LogoutButton';
import searchIconNavy from '../../assets/search_icon_navy.png';
import '../../styles/Header.css';

function Header({ isLoggedIn, onLogout }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout(); // 전달받은 onLogout 함수로 로그아웃 상태 변경
    
        // 로그아웃 후 메인 페이지로 리다이렉트
        navigate('/'); // navigate 함수를 사용하여 리다이렉트
    };
    

    return (
        <header className="header">
            <div className="headerWrap">
                <div className="headerLogoArea">
                    <Link to="/" className="headerLogoHomeLink">
                        <span className="koread">KO</span>READ
                    </Link>
                </div>
                <div className="searchArea">
                    <div className="searchBox">
                        <input type="text" placeholder="이곳에서 원하는 책을 찾아보세요!" className="searchBar"></input>
                        <img alt="search_icon" src={searchIconNavy} className="searchIcon"/>  
                    </div>
                </div>
                {/* Header의 로그인 상태에 따라 달라지는 내용 */}
                <ul className="joinArea">
                    {isLoggedIn ? (
                        <li className="headerUserIdBox">
                            <Link to="/mypage" className="headerMyPageLink">
                                <span className="userID">UserID#0001</span>
                            </Link>
                        </li>
                    ) : (
                        <li className="headerSignUpBox">
                            <Link to="/signup" className="headerSignUpLink">
                                <span className="headerSignUpText">회원가입</span>
                            </Link>
                        </li>
                    )}
                    {isLoggedIn ? (
                        <li className="headerLogoutBox">
                            <LogoutButton isLoggedIn={isLoggedIn} onLogout={handleLogout} />
                        </li>
                    ) : (
                        <li className="headerLoginBox">
                            <LogoutButton isLoggedIn={isLoggedIn} />
                        </li>
                    )}
                </ul>
            </div>
        </header>
    );
}

export default Header