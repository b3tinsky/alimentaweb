import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer";
import "../styles/global.module.scss";

const Layout = (props) => {
    return (
        <div>
            <Navbar />
            <div className="pt-5" style={{ minHeight: "94vh" }}>
                {props.children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
