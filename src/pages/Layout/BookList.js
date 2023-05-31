import React, { useEffect, useState } from 'react';

import '../../styles/BookList.css';

const BookList = (props) => {
  const [bookInfo, setBookInfo] = useState({});
 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (props.pageType === 'bestseller') {
      getBestsellerBooks();
    } else if (props.pageType === 'new') {
      getNewBooks();
    }
  }, []);

  let BookNumber = 0;
  let PageName = '';
  let PageTitle = '';
  let message;

  if (props.pageType === 'bestseller') {
    PageName = 'bestseller';
    PageTitle = '베스트셀러';
    message = <p className="pageMessage">인터넷에서 구매한 지난 주의 가장 인기있는 상품입니다.</p>;
  } else if (props.pageType === 'new') {
    PageName = 'new';
    PageTitle = '신간도서';
    message = <p className="pageMessage">이 주에 새롭게 등록된 상품 중 MD가 추천하는 특별한 상품입니다.</p>;
  }

  // 베스트셀러 목록을 호출하는 함수
  const getBestsellerBooks = async () => {
    try {
      const res = await fetch(
        `http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbferamt3081706002&QueryType=Bestseller&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20131101`
      );

      const response = await res.text();
      const parser = new window.DOMParser();
      const xmlDOM = parser.parseFromString(response, 'text/xml');
      setBookInfo(xmlDOM);
      setLoading(false);
    } catch (error) {
      window.alert('API 호출 에러!');
    }
  };

  // 신간도서 목록을 호출하는 함수
  const getNewBooks = async () => {
    try {
      const res = await fetch(
        `http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbferamt3081706002&QueryType=ItemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20131101`
      );

      const response = await res.text();
      const parser = new window.DOMParser();
      const xmlDOM = parser.parseFromString(response, 'text/xml');
      setBookInfo(xmlDOM);
      setLoading(false);
    } catch (error) {
      window.alert('API 호출 에러!');
    }
  };

  const handleBuyClick = (link) => {
    window.open(link, '_blank');
  };

  const handleWishlistClick = () => {
    alert('위시리스트에 추가되었습니다.');
  };

  const renderBookList = () => {
    const books = bookInfo.getElementsByTagName('item');

    return (
      <ul className={`${PageName}BookList`}>
        {Array.from(books).map((book, index) => (
          <li className={`${PageName}BookElement`} key={index}>
            <div className="bookImgArea">
              <img alt="bookImg00" src={book.getElementsByTagName('cover')[0].textContent} className="bookImg" />
            </div>
            <div className="infoBox">
              <ul className="bookInfo">
                <li className={`title#${index}`}>{book.getElementsByTagName('title')[0].textContent}</li>
                <li>{book.getElementsByTagName('author')[0].textContent}</li>
                <li>{book.getElementsByTagName('publisher')[0].textContent}</li>
                <li>{book.getElementsByTagName('pubDate')[0].textContent}</li>
                <li></li>
              </ul>
              <ul className="priceInfo">
                <li className={`regularPrice#${index}`}>정가  {book.getElementsByTagName('priceStandard')[0].textContent}원</li>

                <li className={`discountPrice#${index}`}>판매가  {book.getElementsByTagName('priceSales')[0].textContent}원</li>
                <li>
                  <p className='buylink' onClick={() => handleBuyClick(book.getElementsByTagName('link')[0].textContent)}>구매링크</p>
                </li>
                <li>
                  <p className='addwishlist'onClick={handleWishlistClick}>위시리스트에 추가</p>
                </li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <main className="contentBookList">
      <section className="contentBookListSection">
        <div className="contentTop">
          <div className="pageNameBox">{PageTitle}</div>
          <div className="pageArticleBox">{message}</div>
        </div>
        {!loading && renderBookList()}
      </section>
    </main>
  );
};

export default BookList;