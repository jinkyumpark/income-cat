import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUserCircle } from "react-icons/fa";

import { useState } from "react";

const Topnav = ({ isLoginOpen, setIsLoginOpen }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const openCloseLogin = () => {
        setIsLoginOpen(!isLoginOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
            <a className="navbar-brand ps-5 pe-5" href="/">
                🐱 Income Cat
            </a>

            <button
                className="navbar-toggler flex-row-reverse"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="/manage">
                        수입관리
                    </a>
                    <a className="nav-item nav-link" href="/asset">
                        재산관리
                    </a>
                    <a className="nav-item nav-link" href="/info">
                        부업정보
                    </a>
                    <a className="nav-item nav-link" href="/community">
                        커뮤니티
                    </a>
                </div>
            </div>

            <div className="nav navbar-nav ps-5 pe-5">
                <button className="btn" onClick={openCloseLogin}>
                    <FaUserCircle color="white" fontSize="1.5em" />
                </button>
            </div>
        </nav>
    );
};

export default Topnav;
