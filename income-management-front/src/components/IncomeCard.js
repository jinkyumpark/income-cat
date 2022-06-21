import React from "react";

import { Card } from "react-bootstrap";

import mainIncomeIcon from "../images/income-main.png";
import subIncomeIcon from "../images/income-sub.png";
import governmentIcon from "../images/income-government.png";
import dividendIcon from "../images/income-dividend.png";
import capitalIcon from "../images/income-capital.png";

const IncomeCard = (props) => {
    return (
        <Card className="border ms-1 me-1">
            <Card.Body>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <img
                            src={capitalIcon}
                            className="img-fluid me-3"
                            style={{
                                width: "50px",
                                height: "50px",
                            }}
                        />
                        <b>{props.incomeType}</b>
                    </li>
                    <li className="list-group-item">{props.incomeContent}</li>
                    <li className="list-group-item">{props.incomeValue} </li>
                </ul>
            </Card.Body>
        </Card>
    );
};

IncomeCard.defaultProps = {
    incomeType: "수입종류없음",
    incomeContent: "설명없음",
    incomeImg: "https://picsum.photos/id/101/300/200",
    incomeValue: "0원",
};

export default IncomeCard;
