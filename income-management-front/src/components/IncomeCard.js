import React from "react";

import { Card } from "react-bootstrap";

import mainIncomeIcon from "../images/income-main.png";
import subIncomeIcon from "../images/income-sub.png";
import governmentIcon from "../images/income-government.png";
import dividendIcon from "../images/income-dividend.png";
import capitalIcon from "../images/income-capital.png";

const IncomeCard = (props) => {
    const incomeTypeToString = (type) => {
        switch (type) {
            case 0:
                return "주요 수입";
            case 1:
                return "부가 수입";
            case 2:
                return "정부지원";
            case 3:
                return "배당형 수입";
            case 4:
                return "차익형 수입";
        }
    };

    const incomeTypeToImage = (type) => {
        switch (type) {
            case 0:
                return mainIncomeIcon;
            case 1:
                return subIncomeIcon;
            case 2:
                return governmentIcon;
            case 3:
                return dividendIcon;
            case 4:
                return capitalIcon;
        }
    };

    return (
        <Card className="border ms-1 me-1">
            <Card.Body>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <img
                            src={incomeTypeToImage(props.income.type)}
                            className="img-fluid me-3"
                            style={{
                                width: "50px",
                                height: "50px",
                            }}
                        />
                        <b>{incomeTypeToString(props.income.type)}</b>
                    </li>
                    <li className="list-group-item">
                        {props.income.description}
                    </li>
                    <li className="list-group-item">
                        {props.income.value
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        {"원"}
                    </li>
                </ul>
            </Card.Body>
        </Card>
    );
};

IncomeCard.defaultProps = {
    income: {
        type: 0,
        description: "오류가 났어요",
        value: 0,
    },
};

export default IncomeCard;
