import React from "react";

// Chart.js
import { Chart, registerables } from "chart.js";
import { Pie, Line } from "react-chartjs-2";

import { Alert, Card } from "react-bootstrap";

Chart.register(...registerables);

const HomeSummary = () => {
    const red = "rgb(231, 147, 145)";
    const redTmp = "rgb(233, 102, 92)";
    const blue = "rgb(152, 159, 233)";
    const blueTmp = "rgb(96, 107, 243)";
    const green = "rgb(133, 196, 172)";
    const yellow = "rgb(252, 240, 12)";
    const orange = "rgb(235, 169, 118)";

    const pieData = {
        labels: ["주수입", "부업", "정부지원", "배당소득", "자본소득"],
        datasets: [
            {
                labels: "수입 비율",
                data: [7, 1, 0.5, 0.5, 2],
                backgroundColor: [red, blue, green, yellow, orange],
                borderColor: ["white"],
                borderWidth: 5,
            },
        ],
    };

    const lineData = {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [
            {
                label: "수입 증가 추세",
                data: [1, 9, 3, 4, 5],
                fill: true,
                backgroundColor: red,
                borderColor: red,
            },
        ],
    };

    const lineOptions = {
        responsive: true,
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            },
        },
        legend: {
            display: false,
        },
    };

    const cardStyle = {
        height: "150px",
        boxShadow: "10px 10xp 10px 10px rgba(0, 0, 0, 0.5)",
    };

    let summary = {
        name: "박진겸",
        monthlyIncome: 1000000,
    };

    return (
        <div>
            <div className="w-100 mt-4 mb-4 row">
                <div className="h3 d-inline">요약</div>

                <div className="row">
                    <div className="col-12 col-lg-4">
                        <Pie data={pieData} />
                    </div>

                    <div className="col-12 col-lg-8">
                        <div className="row">
                            <div className="row mb-4">
                                <div className="col-12 col-lg-6">
                                    <Card body style={cardStyle}>
                                        {summary.name}님은 이번달에{" "}
                                        {summary.monthlyIncome
                                            .toString()
                                            .replace(
                                                /\B(?=(\d{3})+(?!\d))/g,
                                                ","
                                            )}
                                        원 버셨어요
                                        <Line
                                            data={lineData}
                                            options={lineOptions}
                                        />
                                    </Card>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <Card body style={cardStyle}></Card>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <Card body style={cardStyle}>
                                        {summary.name}님은 이번달에{" "}
                                        {summary.monthlyIncome
                                            .toString()
                                            .replace(
                                                /\B(?=(\d{3})+(?!\d))/g,
                                                ","
                                            )}
                                        원 버셨어요
                                    </Card>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <Card body style={cardStyle}>
                                        {summary.name}님은 이번달에{" "}
                                        {summary.monthlyIncome
                                            .toString()
                                            .replace(
                                                /\B(?=(\d{3})+(?!\d))/g,
                                                ","
                                            )}
                                        원 버셨어요
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSummary;
