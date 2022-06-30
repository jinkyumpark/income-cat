import React from "react";

import IncomeCard from "../IncomeCard";

import { CardGroup, Button, Modal } from "react-bootstrap";

const LatestIncome = (props) => {
    const incomeList = [
        {
            key: 0,
            type: 0,
            description: "비바리퍼블리카 7월달 월급",
            value: 5500000,
        },
        {
            key: 1,
            type: 1,
            description: "배달 알바",
            value: 17000,
        },
        {
            key: 2,
            type: 2,
            description: "취업장려금 6월",
            value: 500000,
        },
        {
            key: 3,
            type: 3,
            description: "리얼티인컴 배당 6월",
            value: 50000,
        },
        // {
        //     key: 4,
        //     type: 4,
        //     description: "QQQM 판매",
        //     value: 160000,
        // },
    ];

    return (
        <div>
            <div className="w-100 mt-4 row">
                <div className="h3 d-inline col-lg-10 col-md-9 col-sm-8">
                    최근 추가한 수입
                </div>

                {/* <Button
                    className="col-lg-2 col-md-3 col-sm-4"
                    onClick={props.openIncome}
                >
                    수입추가
                </Button> */}
            </div>

            <CardGroup className="row">
                {incomeList.map((income, i) => {
                    return (
                        <div className="col-sm-6 col-lg-3 p-3">
                            <IncomeCard income={income} />
                        </div>
                    );
                })}
            </CardGroup>

            <div className="row mt-3 mb-3">
                <div className="col-lg-4 col-0"></div>
                <div className="col-lg-4 col-12">
                    <div className="btn btn-success w-100">더 보기</div>
                </div>
                <div className="col-lg-4 col-0"></div>
            </div>
        </div>
    );
};

export default LatestIncome;
