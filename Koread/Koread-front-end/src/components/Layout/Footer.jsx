import React from "react"
import '../../styles/Footer.css';

const Footer = (props) => {
    return (
        <footer className='footer'>
            <div className="footerLogo"><span className="footerTitle">KOREAD</span></div>
            <ul className="projectInfo">
                <li className="title">
                    <a href="https://drive.google.com/drive/folders/1Fgub8r7q6FH_f5jCsyvhZYE3QRHAwDEv" target="_blank" rel="noopener noreferrer">
                        <span>Google Drive </span>
                    </a>
                    <a href="https://github.com/CapstoneTeamAku" target="_blank" rel="noopener noreferrer">
                        <span>| Github</span>
                    </a>
                </li>
                <li><a href="https://www.hallym.ac.kr/" target="_blank" rel="noopener noreferrer"><span>강원도 춘천시 한림대학길 1 한림대학교</span></a></li>
                <li>2023 1학기 소프트웨어 캡스톤디자인</li>
            </ul>
            <ul className="teamInfo">
                <li className="title">회사 정보</li>
                <li>팀명 : 아쿠</li>
                <li>서비스명 : Koread | 도서 추천 웹사이트</li>
                <li>e-mail : bakerslab0115@gmail.com</li>
                <li>연락처 : 010-6379-8884</li>
            </ul>
            <ul className="playerInfo">
                <li className="title">참여자 정보</li>
                <li>구민성</li>
                <li>김준혁</li>
                <li>류정원</li>
                <li>박지민</li>
                <li>채명기</li>
            </ul>
        </footer>
    )
}

export default Footer