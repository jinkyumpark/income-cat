// Core React
import React from 'react'
import { state, useState } from 'react'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Alert, CardGroup, Button, Modal  } from 'react-bootstrap'

// Chart.js
import { Pie } from 'react-chartjs-2'

// React Component
import IncomeCard from './IncomeCard'
import ModalButton from './ModalButton'
import Login from './Login'

const Home = (props) => {
    const openIncome = () => {
        props.setIsIncomeOpen(true)
    }

    const data = [
            {
                "incomeType": "주수입",
                "incomeContent": "큐이엠 5월달 월급",
                "incomeImg": "https://picsum.photos/id/102/300/200"
            },
            {
                "incomeType": "주수입",
                "incomeContent": "큐이엠 5월달 월급",
                "incomeImg": "https://picsum.photos/id/102/300/200"
            },
            {
                "incomeType": "주수입",
                "incomeContent": "큐이엠 5월달 월급",
                "incomeImg": "https://picsum.photos/id/102/300/200"
            },
            {
                "incomeType": "주수입",
                "incomeContent": "큐이엠 5월달 월급",
                "incomeImg": "https://picsum.photos/id/102/300/200"
            }
    ]

    return (
        <div className='container mt-5'>
        <Alert>
            박진겸님은 이번달에 1,000,000원 버셨어요
        </Alert>


        <div className='w-100 mt-4 mb-4 row'>
            <div 
                className='h3 d-inline col-lg-11 col-md-10 col-sm-9'
            >최근 추가한 수입</div>

            <Button
                className="col-lg-1 col-md-2 col-sm-3"
                onClick={openIncome}
            >
                수입추가
            </Button>

        </div>

        <CardGroup className='row'>

            {data.map(function(object, i) {
                return <div className='col-sm-6 col-lg-3'>
                    <IncomeCard
                        incomeType={object.incomeType}
                        incomeContent={object.incomeContent}
                        incomeImg={object.incomeImg}
                    />
                </div>
            })}

        </CardGroup>


        </div>
    )

}
export default Home
