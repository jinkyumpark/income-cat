// Core React
import React, { useState } from "react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "react-bootstrap";

// React Component
import LatestIncome from "./LatestIncome";
import HomeSummary from "./HomeSummary";
import { useEffect } from "react";

const Home = (props) => {
    const openIncome = () => {
        props.setIsIncomeOpen(true);
    };

    const [welcomeMessage, setWelcomeMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost/v1/member/welcome")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setWelcomeMessage(data.message);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="container mt-5">
            <div className="alert alert-warning">{welcomeMessage}</div>

            <HomeSummary />

            <LatestIncome openIncome={openIncome} />
        </div>
    );
};
export default Home;
