import React from "react";

import IncomeCard from "../IncomeCard";

import { CardGroup, Button, Modal } from "react-bootstrap";

const LatestIncome = (props) => {
    const incomeList = [
        {
            type: "주수입",
            description: "큐이엠 5월달 월급",
            image: "https://picsum.photos/id/102/300/200",
        },
        {
            type: "주수입",
            description: "큐이엠 5월달 월급",
            image: "https://picsum.photos/id/102/300/200",
        },
        {
            type: "주수입",
            description: "큐이엠 5월달 월급",
            image: "https://picsum.photos/id/102/300/200",
        },
        {
            type: "주수입",
            description: "큐이엠 5월달 월급",
            image: "https://picsum.photos/id/102/300/200",
        },
    ];

    return (
        <div>
            <div className="w-100 mt-4 mb-4 row">
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
                            <IncomeCard
                                incomeType={income.type}
                                incomeContent={income.description}
                                incomeImg={income.image}
                            />
                        </div>
                    );
                })}
            </CardGroup>
        </div>
    );
};

export default LatestIncome;
