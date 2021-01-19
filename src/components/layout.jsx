import React from 'react';
import Navbar from './navbar';
import '../styles/global.module.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Layout = (props) => {
    return (
        <div>
            <Navbar />
            <div className="pt-5">
                {props.children}
            </div>
        </div>
    )
}

export default Layout