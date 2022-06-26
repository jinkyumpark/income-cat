// Core React
import React from "react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "react-bootstrap";

// React Component
import LatestIncome from "./LatestIncome";
import HomeSummary from "./HomeSummary";

const Home = (props) => {
    const openIncome = () => {
        props.setIsIncomeOpen(true);
    };

    return (
        <div className="container mt-5">
            <div className="alert alert-warning">
                반가워요 박진겸님! 이번달에도 열심히 하셔서 다양한 곳에서 수익을
                얻으셨어요
            </div>

            <HomeSummary />

            <LatestIncome openIncome={openIncome} />
        </div>
    );
};
export default Home;
