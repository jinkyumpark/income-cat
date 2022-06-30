import React from "react";

// Chart.js
import { Chart, registerables } from "chart.js";
import { Pie, Line } from "react-chartjs-2";

import { Alert, Card, CardGroup } from "react-bootstrap";

import surveyIcon from "../../images/survey-icon.png";

Chart.register(...registerables);

const HomeSummary = () => {
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

    const cardStyle = {
        height: "150px",
        boxShadow: "10px 10xp 10px 10px rgba(0, 0, 0, 0.5)",
    };

    let summary = {
        name: "박진겸",
        monthlyIncome: 1914752,
    };

    return (
        <div className="container">
            <div className="h3 d-inline">요약</div>

            <div className="mt-4 mb-4 row">
                <div className="row">
                    <div className="col-12 col-lg-4 mb-5">
                        <Pie data={pieData} />
                    </div>

                    <div className="col-12 col-lg-8">
                        <CardGroup className="row">
                            <div className="row mb-4">
                                <div className="col-12 col-lg-6">
                                    <Card body style={cardStyle}>
                                        <div className="h4 text-center mb-4 text-secondary">
                                            이번달에 {summary.name}님은?
                                        </div>
                                        <div className="h5 text-center">
                                            {summary.monthlyIncome
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ","
                                                )}
                                            원
                                        </div>
                                    </Card>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <Card style={cardStyle}>
                                        <Card.Body className="pt-0">
                                            <Line
                                                data={lineData}
                                                options={lineOptions}
                                            />
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <Card body style={cardStyle}>
                                        <div className="h5 text-center">
                                            {summary.name}님, 이런 부업은
                                            어떠세요?
                                        </div>

                                        <Card
                                            body
                                            style={{ height: "75px" }}
                                            className="mt-3 shadow"
                                        >
                                            <div className="row">
                                                <div className="col-3">
                                                    <img
                                                        src={surveyIcon}
                                                        alt=""
                                                        className="img-fluid"
                                                        style={{
                                                            height: "40px",
                                                        }}
                                                    />
                                                </div>
                                                <div className="col-9">
                                                    <div className="h6">
                                                        설문조사로 한 달에
                                                        10만원?
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </Card>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <Card body style={cardStyle}></Card>
                                </div>
                            </div>
                        </CardGroup>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSummary;
