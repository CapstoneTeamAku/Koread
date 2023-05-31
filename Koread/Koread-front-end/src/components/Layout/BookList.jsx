import React from "react"
import bookImg00 from '../../assets/book_img_00.png'
import '../../styles/BookList.css';

let BookNumber=0;
let PageName="";
let PageTitle="";
let message;

{/* React Error : is declared but its value is never read. [6133] => 대문자로 시작해야 함 */}
const BookList = (props, {isBestseller}) => {
    if (props.pageType === "bestseller") {
        PageName="bestseller";
        PageTitle="베스트셀러";
        message = <p className="pageMessage">인터넷에서 판매되는 상품의 지난 하루간 가장 많이 판매된 순위입니다.</p>
    } else if (props.pageType === "new") {
        PageName="new";
        PageTitle="신간도서";
        message = <p className="pageMessage">이 주에 새롭게 등록된 신상품 중 MD가 추천하는 리스트입니다.</p>
    }
    return (
        <main className="contentBookList">
            <section className="contentBookListSection">
                <div className="contentTop">
                    {/*
                    <div className="backIconBox">
                        <img alt="backIconGray" src={backIconGray} className="backIconGray"></img>
                    </div>
                    */}
                    <div className="pageNameBox">
                        {PageTitle}
                    </div>
                    <div className="pageArticleBox">
                        {message}
                    </div>
                </div>
                <ul className={`${PageName}BookList`}>
                    <li className={`${PageName}BookElement`}>
                        <div className="bookImgArea">
                            <img alt="bookImg00" src={bookImg00} className="bookImg"></img>
                        </div>
                        <div className="infoBox">
                            <ul className="bookInfo">
                                <li className={`title#${BookNumber}`}>제목</li>
                                <li>저자</li>
                                <li>출판사</li>
                                <li>출판년도</li>
                                <li>출판일자</li>
                            </ul>
                            <ul className="priceInfo">
                                <li className={`regularPrice#${BookNumber}`}>정가</li>
                                <li>원래 가격</li>
                                <li className={`discountPrice#${BookNumber}`}>최저가</li>
                                <li>판매처</li>
                                <li>할인 가격</li>
                            </ul>
                        </div>
                    </li>


                    {/*------------------------------------------------------------*/}
                    <li className={`${PageName}BookElement`}>
                        <div className="bookImgArea">
                            <img alt="bookImg00" src={bookImg00} className="bookImg"></img>
                        </div>
                        <div className="infoBox">
                            <ul className="bookInfo">
                                <li className={`title#${BookNumber}`}>제목</li>
                                <li>저자</li>
                                <li>출판사</li>
                                <li>출판년도</li>
                                <li>출판일자</li>
                            </ul>
                            <ul className="priceInfo">
                                <li className={`regularPrice#${BookNumber}`}>정가</li>
                                <li>원래 가격</li>
                                <li className={`discountPrice#${BookNumber}`}>최저가</li>
                                <li>판매처</li>
                                <li>할인 가격</li>
                            </ul>
                        </div>
                    </li>
                    <li className={`${PageName}BookElement`}>
                        <div className="bookImgArea">
                            <img alt="bookImg00" src={bookImg00} className="bookImg"></img>
                        </div>
                        <div className="infoBox">
                            <ul className="bookInfo">
                                <li className={`title#${BookNumber}`}>제목</li>
                                <li>저자</li>
                                <li>출판사</li>
                                <li>출판년도</li>
                                <li>출판일자</li>
                            </ul>
                            <ul className="priceInfo">
                                <li className={`regularPrice#${BookNumber}`}>정가</li>
                                <li>원래 가격</li>
                                <li className={`discountPrice#${BookNumber}`}>최저가</li>
                                <li>판매처</li>
                                <li>할인 가격</li>
                            </ul>
                        </div>
                    </li>
                    <li className={`${PageName}BookElement`}>
                        <div className="bookImgArea">
                            <img alt="bookImg00" src={bookImg00} className="bookImg"></img>
                        </div>
                        <div className="infoBox">
                            <ul className="bookInfo">
                                <li className={`title#${BookNumber}`}>제목</li>
                                <li>저자</li>
                                <li>출판사</li>
                                <li>출판년도</li>
                                <li>출판일자</li>
                            </ul>
                            <ul className="priceInfo">
                                <li className={`regularPrice#${BookNumber}`}>정가</li>
                                <li>원래 가격</li>
                                <li className={`discountPrice#${BookNumber}`}>최저가</li>
                                <li>판매처</li>
                                <li>할인 가격</li>
                            </ul>
                        </div>
                    </li>
                    <li className={`${PageName}BookElement`}>
                        <div className="bookImgArea">
                            <img alt="bookImg00" src={bookImg00} className="bookImg"></img>
                        </div>
                        <div className="infoBox">
                            <ul className="bookInfo">
                                <li className={`title#${BookNumber}`}>제목</li>
                                <li>저자</li>
                                <li>출판사</li>
                                <li>출판년도</li>
                                <li>출판일자</li>
                            </ul>
                            <ul className="priceInfo">
                                <li className={`regularPrice#${BookNumber}`}>정가</li>
                                <li>원래 가격</li>
                                <li className={`discountPrice#${BookNumber}`}>최저가</li>
                                <li>판매처</li>
                                <li>할인 가격</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default BookList;