import React from "react"
import Header from "./Header";
import SideNav from "./SideNav";
import Main from "./Main";
import Footer from "./Footer";
import '../../styles/Layout.css';

const Layout = (props) => {
    if (props.type === "main" && props.state === "member") {
        return (
            <div className="wrapper">
                <Header state="member"/>
                <Main />
                <Footer />
            </div>
        );
    }
    else if (props.type === "main" && props.state !== "member") {
        return (
            <div className="wrapper">
                <Header/>
                <Main />
                <Footer />
            </div>
        );
    }
    return (
        <div>
            <Header />
            <SideNav />
            <Main />
            <Footer />
        </div>
    )
}

export default Layout