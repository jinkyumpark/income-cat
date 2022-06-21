// Core React
import React from "react";
import { state, useState } from "react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, CardGroup, Button, Modal } from "react-bootstrap";

// React Component
import IncomeCard from "../IncomeCard";
import ModalButton from "../ModalButton";
import Login from "../Login";
import LatestIncome from "./LatestIncome";
import HomeAsset from "./HomeAsset";

const Home = (props) => {
    const openIncome = () => {
        props.setIsIncomeOpen(true);
    };

    return (
        <div className="container mt-5">
            <Alert>박진겸님은 이번달에 1,000,000원 버셨어요</Alert>

            <HomeAsset />

            <LatestIncome openIncome={openIncome} />
        </div>
    );
};
export default Home;
