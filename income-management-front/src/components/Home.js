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

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div className='container mt-5'>
        <Alert>
            박진겸님은 이번달에 1,000,000원 버셨어요
        </Alert>


        <div className='w-100 mt-4 mb-4 row'>
            <div className='h3 d-inline col-lg-11 col-md-10 col-sm-9'>최근 추가한 수입</div>

            <ModalButton label="수입추가" labelClose="취소" isModalOpen={ isModalOpen } setIsModalOpen= { setIsModalOpen }/>
        </div>

        <CardGroup className='row'>

            <div className="col-sm-6 col-lg-3">
                <IncomeCard
                    incomeType="주수입"
                    incomeContent="큐이엠 5월달 월급"
                    incomeImg="https://picsum.photos/id/100/300/200"
                />
            </div>

            <div className='col-sm-6 col-lg-3'>
                <IncomeCard 
                    className="col-sm-6"
                    incomeType="부수입" 
                    incomeContent="쿠팡 배달"
                    incomeImg="https://picsum.photos/id/101/300/200"
                />
            </div>

            <div className='col-sm-6 col-lg-3'>
                <IncomeCard 
                    className="col-sm-6"
                    incomeType="부수입" 
                    incomeContent="쿠팡 배달"
                    incomeImg="https://picsum.photos/id/102/300/200"
                />
            </div>

            <div className='col-sm-6 col-lg-3'>
                <IncomeCard 
                    className="col-sm-6"
                    incomeType="지원금" 
                    incomeContent="국비지원 지원금 (3월)"
                    incomeImg="https://picsum.photos/id/103/300/200"
                    incomeValue="110000원"
                />
            </div>


        </CardGroup>

        <Modal
            show={isModalOpen}
        >
            <Login isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </Modal>

        </div>
    )

}

export default Home