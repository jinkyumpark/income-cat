import React from "react";

import MAIN from "../../images/income-main.png";
import PARTTIME from "../../images/income-sub.png";
import GOVERNMENT from "../../images/income-government.png";
import DIVIDEND from "../../images/income-dividend.png";
import CAPITAL from "../../images/income-capital.png";

// MAIN, PARTTIME, GOVERNMENT, DIVIDEND, CAPITAL

const Income = ({ income }) => {
    return (
        <div
            className={
                "card m-3 " +
                (income.mainCategory == "MAIN"
                    ? "border-danger"
                    : income.mainCategory == "PARTTIME"
                    ? "border-primary"
                    : income.mainCategory == "GOVERNMENT"
                    ? "border-success"
                    : income.mainCategory == "DIVIDEND"
                    ? "border-warning"
                    : "border-info")
            }
        >
            <div className="card-body">
                <div className="row">
                    <div className="col-2">
                        <div className="row">
                            <img
                                src={
                                    income.mainCategory == "MAIN"
                                        ? MAIN
                                        : income.mainCategory == "PARTTIME"
                                        ? PARTTIME
                                        : income.mainCategory == "GOVERNMENT"
                                        ? GOVERNMENT
                                        : income.mainCategory == "DIVIDEND"
                                        ? DIVIDEND
                                        : CAPITAL
                                }
                                alt=""
                                className="img-fluid"
                            />
                            <div className="h5 text-center">
                                {income.mainCategory == "MAIN"
                                    ? "주수입"
                                    : income.mainCategory == "PARTTIME"
                                    ? "부수입"
                                    : income.mainCategory == "GOVERNMENT"
                                    ? "정부지원"
                                    : income.mainCategory == "DIVIDEND"
                                    ? "배당소득"
                                    : "자본소득"}
                            </div>
                        </div>
                    </div>

                    <div className="col-9 ms-3">
                        <div className="h4">{income.description}</div>
                        <div className="h5">
                            {income.amount
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            원
                        </div>
                        <div className="h5 text-secondary">
                            {income.depositeDate
                                .substring(3)
                                .replaceAll("-", "월 ")
                                .replace("T", "일 ")
                                .substring(0, 7)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Income;
