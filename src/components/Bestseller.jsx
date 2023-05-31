import React from "react"
import SideNav from "./Layout/SideNav";
import BookList from "./Layout/BookList";
import '../styles/Bestseller.css';

const Bestseller = ({ isBestseller }) => {
    return (
        <div className="bestsellerBody">
            <SideNav />
            <BookList pageType="bestseller" isBestseller={isBestseller}/> {/* props : pageType="bestseller" or "new" */}
        </div>
    )
}

export default Bestseller;