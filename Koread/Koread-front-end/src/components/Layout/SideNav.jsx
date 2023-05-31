import React from "react"
import {Link} from 'react-router-dom';
import '../../styles/SideNav.css';

const SideNav = (props) => {
    if (props.state === "off") {
        return null;
    }
    return (
        <nav className="sideNavBar">
            <ul className="navList">
                <li className="navListElement">
                    <div className="navPageBox">
                        <Link to="/bestseller" className="navPageLink">
                            베스트셀러
                        </Link>    
                    </div>
                </li>
                <li className="navListElement">
                    <div className="navPageBox">
                        <Link to="/new" className="navPageLink">
                            신간도서
                        </Link>
                    </div>    
                </li>
                <li className="navListElement">
                    <div className="navPageBox">
                        <Link to="/board" className="navPageLink">
                            <span>자유게시판</span>
                        </Link>
                    </div>    
                </li>
                {/* 
                    <li>
                    <Link to="/mypage" className="navPageLink">
                        <span>마이페이지</span>
                    </Link>    
                </li>
                */}
            </ul>
        </nav>
    )
}

export default SideNav