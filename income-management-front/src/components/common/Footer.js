import React from "react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white mt-auto">
            <div className="container pb-0">
                <section className=""></section>
            </div>

            <a
                className="text-center p-1 text-white text-decoration-none"
                href="info"
            >
                © 2022 Copyright: (주)그래도 고양이
            </a>
        </footer>
    );
};

export default Footer;
