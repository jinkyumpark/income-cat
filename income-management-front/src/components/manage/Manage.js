import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Pie, Line } from "react-chartjs-2";

import Income from "./Income";
import { useState } from "react";

const Manage = () => {
    const red = "rgb(231, 147, 145)";
    const redTmp = "rgb(233, 102, 92)";
    const blue = "rgb(152, 159, 233)";
    const blueTmp = "rgb(96, 107, 243)";
    const green = "rgb(133, 196, 172)";
    const yellow = "rgb(252, 240, 12)";
    const orange = "rgb(235, 169, 118)";

    const income = [500000, 300000, 500000, 100000, 50000];

    const pieData = {
        labels: ["주수입", "부업", "정부지원", "배당소득", "자본소득"],
        datasets: [
            {
                labels: "수입 비율",
                data: income,
                backgroundColor: [red, blue, green, yellow, orange],
                borderColor: ["white"],
                borderWidth: 5,
            },
        ],
    };

    const lineData = {
        labels: ["1월", "2월", "3월", "4월", "5월"],
        datasets: [
            {
                label: "수입 증가 추세",
                data: [1, 9, 3, 4, 5],
                fill: false,
                backgroundColor: red,
                borderColor: red,
            },
        ],
    };

    const lineOptions = {
        responsive: true,
        scales: {
            x: {
                display: true,
            },
            y: {
                display: false,
            },
        },
    };

    const incomeList = [
        {
            id: 1,
            mainCategory: "MAIN",
            subCategory: {
                id: 1,
                name: "survey",
                displayName: "설문조사",
            },
            description: "서베이링크 7월 설문조사",
            amount: 10000,
            currency: "KRW",
            depositeDate: "22-07-21T12:00",
        },
        {
            id: 2,
            mainCategory: "PARTTIME",
            subCategory: {
                id: 1,
                name: "survey",
                displayName: "설문조사",
            },
            description: "서베이링크 7월 설문조사",
            amount: 10000,
            currency: "KRW",
            depositeDate: "22-07-21T12:00",
        },
        {
            id: 3,
            mainCategory: "GOVERNMENT",
            subCategory: {
                id: 1,
                name: "survey",
                displayName: "설문조사",
            },
            description: "서베이링크 7월 설문조사",
            amount: 10000,
            currency: "KRW",
            depositeDate: "22-07-21T12:00",
        },
        {
            id: 3,
            mainCategory: "DIVIDEND",
            subCategory: {
                id: 1,
                name: "survey",
                displayName: "설문조사",
            },
            description: "서베이링크 7월 설문조사",
            amount: 10000,
            currency: "KRW",
            depositeDate: "22-07-21T12:00",
        },
        {
            id: 3,
            mainCategory: "CAPITAL",
            subCategory: {
                id: 1,
                name: "survey",
                displayName: "설문조사",
            },
            description: "서베이링크 7월 설문조사",
            amount: 10000,
            currency: "KRW",
            depositeDate: "22-07-21T12:00",
        },
    ];

    const [displayCurrency, setDisplayCurrency] = useState("KRW");

    return (
        <div className="container mt-5">
            <div className="row mb-3">
                <div className="col-10">
                    <div className="h2">7월달에는 100,000원 버셨어요</div>
                </div>

                <div className="col-2">
                    <div
                        className="btn btn-warning"
                        style={{
                            backgroundColor: "rgb(39, 134, 100)",
                            color: "white",
                        }}
                        onClick={() => {
                            if (displayCurrency == "KRW") {
                                setDisplayCurrency("USD");
                            } else {
                                setDisplayCurrency("KRW");
                            }
                        }}
                    >
                        {displayCurrency == "KRW"
                            ? "달러($)로 보기"
                            : "원화(₩)로 보기"}
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-5">
                    <Pie data={pieData} />
                </div>
                <div
                    className="col-7"
                    style={{
                        height: "500px",
                        overflow: "auto",
                    }}
                >
                    {incomeList.map((income) => {
                        return <Income income={income} />;
                    })}
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            <Line data={lineData} options={lineOptions} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manage;
