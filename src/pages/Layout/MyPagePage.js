import React, { useEffect, useState } from 'react';
import '../../styles/MyPage.css';
import ChangePw from '../../pages/ChangePw';


function MyPage() { //위시리스트, recentbook받아오는 기능 추가 필요
  const [bookInfo, setBookInfo] = useState({});
  const [showChangePw, setShowChangePw] = useState(false);

  useEffect(() => {
    fetch('https://www.aladin.co.kr/ttb/api/ItemLookUp.aspx?ttbkey=ttbferamt3081706002&itemIdType=ISBN13&ItemId=9791130699738')
      .then(response => response.json())
      .then(data => setBookInfo(data));
  }, []);

  const handleOpenChangePw = () => {
    setShowChangePw(true);
  };

  const handleCloseChangePw = () => {
    setShowChangePw(false);
  };

  function handleGoback(){
    window.history.back();
  }

  return (
    <div className='MypageContianer'>
      <button className='back-button' onClick={handleGoback}></button>
      <div className='text'>
        <h2>상세 정보</h2>
      </div>

      <div className='profilebox'>
        <h3 className='profiletext'>프로필</h3>
        <div className='line'></div>

        <ul className='profileUl'>
          <li>닉네임</li>
          <li>성명</li>
          <li>생년월일</li>
          <li>이메일</li>
        </ul>

        <div className='profileimg'></div>
        <button className='changepw' onClick={handleOpenChangePw}>비밀번호 변경</button>
      </div>
      <div className='recentbookbox'>
        <h3 className='recenttext'>최근 둘러본 책</h3>
        <div className='line'></div>
        <div className='recentbook1'><span className='recentbooktext1'>{bookInfo.title} / {bookInfo.author}</span> </div>
        <div className='recentbook2'><span className='recentbooktext2'>{bookInfo.title} / {bookInfo.author}</span> </div>
        <div className='recentbook3'><span className='recentbooktext3'>{bookInfo.title} / {bookInfo.author}</span> </div>
        <div className='recentbook4'><span className='recentbooktext4'>{bookInfo.title} / {bookInfo.author}</span> </div>
        <div className='recentbook5'><span className='recentbooktext5'>{bookInfo.title} / {bookInfo.author}</span> </div>
      </div>

      <div className='wishlistbox'>
        <h3 className='mywishtext'>My Wish</h3>
        <h3 className='wishtext'></h3>
        <div className='wishlist1'>
          <span className='left'>{bookInfo.title}세이노의 가르침</span>
          <span className='right'>{bookInfo.author} 세이노/ {bookInfo.publisher}데이원</span>
        </div>
        
        <div className='wishlist2'>
        <span className='left'>{bookInfo.title}역행자</span>
        <span className='right'>{bookInfo.author} 자청/ {bookInfo.publisher}웅진지식하우스</span>
        </div>
        <div className='wishlist3'>
        <span className='left'>{bookInfo.title}</span>
        <span className='right'>{bookInfo.author}  {bookInfo.publisher}</span>
        </div>
        <div className='wishlist4'>
        <span className='left'>{bookInfo.title}</span>
        <span className='right'>{bookInfo.author}  {bookInfo.publisher}</span>
        </div>
        <div className='wishlist5'>
        <span className='left'>{bookInfo.title}</span>
        <span className='right'>{bookInfo.author}  {bookInfo.publisher}</span>
        </div>
        {showChangePw && <ChangePw onClose={handleCloseChangePw} />}
      </div>
    </div>
  );
}

export default MyPage;