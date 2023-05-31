import React from "react"
import '../styles/NotFound.css';

const NotFound = () => {
    return (
        <div className="errorBox">
            <h1 className="errorCode">404</h1>
            <span className="errorMessage">PAGE NOT FOUND</span>
        </div>
    )
}

export default NotFound