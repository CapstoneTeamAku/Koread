import React from "react"
import SideNav from "./Layout/SideNav";
import BookList from "./Layout/BookList";
import '../styles/New.css';

const New = (props) => {
    return (
        <div className="newBody">
            <SideNav />
            <BookList pageType="new"/> {/* props : pageType="bestseller" or "new" */}
        </div>
    )
}

export default New;