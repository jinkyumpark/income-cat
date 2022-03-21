import React from 'react'

import { Card } from 'react-bootstrap'

const IncomeCard = (props) => {

  return (
    <Card className='border ms-1 me-1'>
        <Card.Img variant="top" src={props.incomeImg}/>
        <Card.Body>

            <Card.Title className="text-center">{props.incomeType}</Card.Title>

            <ul className='list-group list-group-flush'>
                <li className='list-group-item'>{ props.incomeContent }</li>
                <li className='list-group-item'>{ props.incomeValue } </li>
            </ul>

        </Card.Body>
    </Card>
)
}

IncomeCard.defaultProps = {
    incomeType: "수입종류없음",
    incomeContent: "설명없음",
    incomeImg: "https://picsum.photos/id/101/300/200",
    incomeValue: "0원"
}

export default IncomeCard