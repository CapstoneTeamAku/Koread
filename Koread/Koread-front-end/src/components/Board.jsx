import React from "react"
import SideNav from "./Layout/SideNav";
import Board from "./Layout/PostList";
import '../styles/Board.css';

const Board = (props) => {
    return (
        <div className="bestsellerBody">
            <SideNav />
            <Board pageType="board"/> {/* props : pageType="bestseller" or "new" */}

        </div>
        
    )
}

export default Board;