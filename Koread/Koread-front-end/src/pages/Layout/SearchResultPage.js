import React, { useEffect, useState } from 'react';
import '../../styles/SearchResult.css';



function SearchResult() {
  const [bookInfo, setBookInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [clickedBookISBN, setClickedBookISBN] = useState('');

  
  useEffect(() => {
    getBookInfo();
  }, []); 

  function handleGoback(){
    window.history.back();
  }

  function handleBookClick(isbn) {
    setClickedBookISBN(isbn);
    window.location.href ="/bookdetail"
  }
  const getBookInfo = async ()=>{
    setLoading(true);
    try{ //api 호출, 검색 기능 미 구현으로 Query값 고정되어있음
      const res = await fetch('http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbferamt3081706002&Query=소크라테스&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=xml') 

      const response = await res.text();
  
      const str = await new window.DOMParser().parseFromString(response,"text/xml")
  
      setBookInfo(str);
      
      setLoading(false);
    }
    catch(error){
      window.alert("API 호출 에러!");
    }
  }

  return (
    <div>
      {loading?<div>로딩중</div>:null/*api가 데이터를 호출하는 것 보다 빨리 페이지가 로딩되면 오류가발생한다. 오류 방지를 위해 작성한 코드*/ } 
      {!loading?
      
    <div className="SearchResultContainer">

        <button className='back-button' onClick={handleGoback}></button>
        <div className="text"><h2>상세 정보</h2></div>
        <div className="result">
          <a>"소크라테스"에 대한 검색 결과 ({bookInfo.querySelectorAll("totalResults")[0].textContent})개</a>
        </div>
        <div className="book-info1">
        <div className="searched-book-image" onClick={handleBookClick}> 

        <img src={bookInfo.querySelectorAll("item cover")[0].textContent}/>
        </div>
          <div className="searchedInfo">
            <ul className='searchedUl'> 
              <li>{bookInfo.querySelectorAll("item title")[0].textContent}</li>{/*제목*/}
              <br></br>
              <li>저자: {bookInfo.querySelectorAll("item author")[0].textContent}</li>
              <br></br>
              <li>출판사: {bookInfo.querySelectorAll("item publisher")[0].textContent}</li>
              <br></br>
              <li>출판일자: {bookInfo.querySelectorAll("item pubDate")[0].textContent}</li>
              <br></br>
            </ul>
          </div>
          <div className='searchedPrice'>
          <h2>정가</h2>
          <h4>{bookInfo.querySelectorAll("item priceStandard")[0].textContent}원</h4>
          <h2>최저가</h2>
          <h4>{bookInfo.querySelectorAll("item priceSales")[0].textContent}원</h4>
          </div>
        </div>
        <div className="book-info2">
        <div className="searched-book-image" onClick={handleBookClick}> 

        <img src={bookInfo.querySelectorAll("item cover")[1].textContent}/>
        </div>
          <div className="searchedInfo">
            <ul className='searchedUl'> 
              <li>{bookInfo.querySelectorAll("item title")[1].textContent}</li>{/*제목*/}
              <br></br>
              <li>저자: {bookInfo.querySelectorAll("item author")[1].textContent}</li>
              <br></br>
              <li>출판사: {bookInfo.querySelectorAll("item publisher")[1].textContent}</li>
              <br></br>
              <li>출판일자: {bookInfo.querySelectorAll("item pubDate")[1].textContent}</li>
              <br></br>
            </ul>
          </div>
          <div className='searchedPrice'>
          <h2>정가</h2>
          <h4>{bookInfo.querySelectorAll("item priceStandard")[1].textContent}원</h4>
          <h2>최저가</h2>
          <h4>{bookInfo.querySelectorAll("item priceSales")[1].textContent}원</h4>
          </div>
        </div>
        <div className="book-info3">
        <div className="searched-book-image" onClick={handleBookClick}> 

        <img src={bookInfo.querySelectorAll("item cover")[2].textContent}/>
        </div>
          <div className="searchedInfo">
            <ul className='searchedUl'> 
              <li>{bookInfo.querySelectorAll("item title")[2].textContent}</li>{/*제목*/}
              <br></br>
              <li>저자: {bookInfo.querySelectorAll("item author")[2].textContent}</li>
              <br></br>
              <li>출판사: {bookInfo.querySelectorAll("item publisher")[2].textContent}</li>
              <br></br>
              <li>출판일자: {bookInfo.querySelectorAll("item pubDate")[2].textContent}</li>
              <br></br>
            </ul>
          </div>
          <div className='searchedPrice'>
          <h2>정가</h2>
          <h4>{bookInfo.querySelectorAll("item priceStandard")[2].textContent}원</h4>
          <h2>최저가</h2>
          <h4>{bookInfo.querySelectorAll("item priceSales")[2].textContent}원</h4>
          </div>
        </div>
        <div className="book-info4">
        <div className="searched-book-image" onClick={handleBookClick}> 

        <img src={bookInfo.querySelectorAll("item cover")[3].textContent}/>
        </div>
          <div className="searchedInfo">
            <ul className='searchedUl'> 
              <li>{bookInfo.querySelectorAll("item title")[3].textContent}</li>{/*제목*/}
              <br></br>
              <li>저자: {bookInfo.querySelectorAll("item author")[3].textContent}</li>
              <br></br>
              <li>출판사: {bookInfo.querySelectorAll("item publisher")[3].textContent}</li>
              <br></br>
              <li>출판일자: {bookInfo.querySelectorAll("item pubDate")[3].textContent}</li>
              <br></br>
            </ul>
          </div>
          <div className='searchedPrice'>
          <h2>정가</h2>
          <h4>{bookInfo.querySelectorAll("item priceStandard")[3].textContent}원</h4>
          <h2>최저가</h2>
          <h4>{bookInfo.querySelectorAll("item priceSales")[3].textContent}원</h4>
          </div>
        </div>
        <div className="book-info5">
        <div className="searched-book-image" onClick={handleBookClick}> 

        <img src={bookInfo.querySelectorAll("item cover")[4].textContent}/>
        </div>
          <div className="searchedInfo">
            <ul className='searchedUl'> 
              <li>{bookInfo.querySelectorAll("item title")[4].textContent}</li>{/*제목*/}
              <br></br>
              <li>저자: {bookInfo.querySelectorAll("item author")[4].textContent}</li>
              <br></br>
              <li>출판사: {bookInfo.querySelectorAll("item publisher")[4].textContent}</li>
              <br></br>
              <li>출판일자: {bookInfo.querySelectorAll("item pubDate")[4].textContent}</li>
              <br></br>
            </ul>
          </div>
          <div className='searchedPrice'>
          <h2>정가</h2>
          <h4>{bookInfo.querySelectorAll("item priceStandard")[4].textContent}원</h4>
          <h2>최저가</h2>
          <h4>{bookInfo.querySelectorAll("item priceSales")[4].textContent}원</h4>
          </div>
        </div>
        <div className="book-info6">
        <div className="searched-book-image" onClick={handleBookClick}> 

        <img src={bookInfo.querySelectorAll("item cover")[5].textContent}/>
        </div>
          <div className="searchedInfo">
            <ul className='searchedUl'> 
              <li>{bookInfo.querySelectorAll("item title")[5].textContent}</li>{/*제목*/}
              <br></br>
              <li>저자: {bookInfo.querySelectorAll("item author")[5].textContent}</li>
              <br></br>
              <li>출판사: {bookInfo.querySelectorAll("item publisher")[5].textContent}</li>
              <br></br>
              <li>출판일자: {bookInfo.querySelectorAll("item pubDate")[5].textContent}</li>
              <br></br>
            </ul>
          </div>
          <div className='searchedPrice'>
          <h2>정가</h2>
          <h4>{bookInfo.querySelectorAll("item priceStandard")[5].textContent}원</h4>
          <h2>최저가</h2>
          <h4>{bookInfo.querySelectorAll("item priceSales")[5].textContent}원</h4>
          </div>
        </div>
        <div className="book-info7">
        <div className="searched-book-image" onClick={handleBookClick}> 

        <img src={bookInfo.querySelectorAll("item cover")[6].textContent}/>
        </div>
          <div className="searchedInfo">
            <ul className='searchedUl'> 
              <li>{bookInfo.querySelectorAll("item title")[6].textContent}</li>{/*제목*/}
              <br></br>
              <li>저자: {bookInfo.querySelectorAll("item author")[6].textContent}</li>
              <br></br>
              <li>출판사: {bookInfo.querySelectorAll("item publisher")[6].textContent}</li>
              <br></br>
              <li>출판일자: {bookInfo.querySelectorAll("item pubDate")[6].textContent}</li>
              <br></br>
            </ul>
          </div>
          <div className='searchedPrice'>
          <h2>정가</h2>
          <h4>{bookInfo.querySelectorAll("item priceStandard")[6].textContent}원</h4>
          <h2>최저가</h2>
          <h4>{bookInfo.querySelectorAll("item priceSales")[6].textContent}원</h4>
          </div>
        </div>
        <div className="book-info8">
        <div className="searched-book-image" onClick={handleBookClick}> 

        <img src={bookInfo.querySelectorAll("item cover")[7].textContent}/>
        </div>
          <div className="searchedInfo">
            <ul className='searchedUl'>
              <li>{bookInfo.querySelectorAll("item title")[7].textContent}</li>{/*제목*/}
              <br></br>
              <li>저자: {bookInfo.querySelectorAll("item author")[7].textContent}</li>
              <br></br>
              <li>출판사: {bookInfo.querySelectorAll("item publisher")[7].textContent}</li>
              <br></br>
              <li>출판일자: {bookInfo.querySelectorAll("item pubDate")[7].textContent}</li>
              <br></br>
            </ul>
          </div>
          <div className='searchedPrice'>
          <h2>정가</h2>
          <h4>{bookInfo.querySelectorAll("item priceStandard")[7].textContent}원</h4>
          <h2>최저가</h2>
          <h4>{bookInfo.querySelectorAll("item priceSales")[7].textContent}원</h4>
          </div>
        </div>
        <div className="book-info9">
        <div className="searched-book-image" onClick={handleBookClick}> 

        <img src={bookInfo.querySelectorAll("item cover")[8].textContent}/>
        </div>
          <div className="searchedInfo">
            <ul className='searchedUl'> 
              <li>{bookInfo.querySelectorAll("item title")[8].textContent}</li>{/*제목*/}
              <br></br>
              <li>저자: {bookInfo.querySelectorAll("item author")[8].textContent}</li>
              <br></br>
              <li>출판사: {bookInfo.querySelectorAll("item publisher")[8].textContent}</li>
              <br></br>
              <li>출판일자: {bookInfo.querySelectorAll("item pubDate")[8].textContent}</li>
              <br></br>
            </ul>
          </div>
          <div className='searchedPrice'>
          <h2>정가</h2>
          <h4>{bookInfo.querySelectorAll("item priceStandard")[8].textContent}원</h4>
          <h2>최저가</h2>
          <h4>{bookInfo.querySelectorAll("item priceSales")[8].textContent}원</h4>
          </div>
        </div>

        <div className="book-info10">
        <div className="searched-book-image" onClick={handleBookClick}> 

        <img src={bookInfo.querySelectorAll("item cover")[9].textContent}/>
        </div>
          <div className="searchedInfo">
            <ul className='searchedUl'> 
              <li>{bookInfo.querySelectorAll("item title")[9].textContent}</li>{/*제목*/}
              <br></br>
              <li>저자: {bookInfo.querySelectorAll("item author")[9].textContent}</li>
              <br></br>
              <li>출판사: {bookInfo.querySelectorAll("item publisher")[9].textContent}</li>
              <br></br>
              <li>출판일자: {bookInfo.querySelectorAll("item pubDate")[9].textContent}</li>
              <br></br>
            </ul>
          </div>
          <div className='searchedPrice'>
          <h2>정가</h2>
          <h4>{bookInfo.querySelectorAll("item priceStandard")[9].textContent}원</h4>
          <h2>최저가</h2>
          <h4>{bookInfo.querySelectorAll("item priceSales")[9].textContent}원</h4>
          </div>
        </div>
      </div>
      :null}
    </div>

  );
}

export default SearchResult;
