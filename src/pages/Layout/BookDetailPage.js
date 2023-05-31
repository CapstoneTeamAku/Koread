import React, { useEffect, useState } from 'react';

import '../../styles/BookDetail.css';

function BookDetail() {
  const [bookInfo, setBookInfo] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getBookInfo();
  }, []); // 도서 정보를 처음 한 번만 가져오기 위해 의존성 배열을 빈 배열로 설정.

  function handleGoback(){
    window.history.back();
  }

  
  const getBookInfo = async () => {
    setLoading(true);
    try { // isbn값 을 다른 페이지로부터 전달받는 기능 미구현으로 isbn값이 고정되어있음.
      const res = await fetch(
        `http://www.aladin.co.kr/ttb/api/ItemLookUp.aspx?ttbkey=ttbferamt3081706002&itemIdType=ISBN13&ItemId=9788901272580&output=xml`
      );

      const response = await res.text();
      const str = new window.DOMParser().parseFromString(response, 'text/xml');
      setBookInfo(str);
      setLoading(false);
    } catch (error) {
      window.alert('API 호출 에러!');
    }
  };

  return (
    <div>
      
      {loading ? <div>로딩중</div> : null}

      
      {!loading ? (
        <div className="BookDetailContainer">
          
          <div className="back-button" onClick={handleGoback}></div>

          
          <div className="text">
            <h2>상세 정보</h2>
          </div>

          
          <div className="book-image">
            <img src={bookInfo.querySelectorAll("item cover")[0].textContent} />
          </div>

          
          <div className="infoBox">
            <div className="information">
              <ul className="ulinfo">
                <li className="firstli">{bookInfo.querySelectorAll("item title")[0].textContent}</li>
                <br />
                <li>저자: {bookInfo.querySelectorAll("item author")[0].textContent}</li>
                <br />
                <br />
                <li>출판사: {bookInfo.querySelectorAll("item publisher")[0].textContent}</li>
                <br />
                <br />
                <li>출판일자: {bookInfo.querySelectorAll("item pubDate")[0].textContent}</li>
                <br />
              </ul>
            </div>

           
            <div className="lowest-price">
              <div className="pricebox1">
                <div className="lptext">
                  <a>원가 {bookInfo.querySelectorAll("item priceStandard")[0].textContent}원</a>
                </div>
                <div className="pricetext">
                  <a className="standardprice"> 최저가 {bookInfo.querySelectorAll("item priceSales")[0].textContent}원</a>{' '}
                  <a className="discountprice">
                    {bookInfo.discount}% {bookInfo.priceSales}할인
                  </a>
                </div>
                <div className="wishlist" onClick={() => window.alert('위시리스트에 추가되었습니다.')} /*위시리스트에 추가 로직 필요*/>
          
                </div>
                <button className="lowpricebtn" onClick={() => window.open('https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=317286716')}>최저가 바로가기</button>
              </div>
              <div className="pricebox2">
                <div className="pricebox3">
                  <div className="price1">
                    알라딘 &nbsp;&nbsp; 가격 {bookInfo.querySelectorAll("item priceSales")[0].textContent}원&nbsp;&nbsp; 
                    <a className='goNow1'  onClick={() => window.open('https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=317286716')}>바로가기</a>
                  </div>
                  <div className="price2">
                    교보문고 &nbsp;&nbsp; 가격 {bookInfo.priceSales}원&nbsp;&nbsp; 바로가기
                  </div>
                  <div className="price3">
                    네이버 &nbsp;&nbsp; 가격 {bookInfo.priceSales}원&nbsp;&nbsp; 바로가기
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default BookDetail;