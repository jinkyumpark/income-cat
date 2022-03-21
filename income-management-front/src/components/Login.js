import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

import ModalButton from './ModalButton'


const Login = (props) => {
  return (
        <div className='container mt-5'>
            <div className='text-center h2'>n
                로그인
            </div>

            <div className='row'>

                <Button className='btn col-4'>
                    로그인
                </Button>

                <ModalButton 
                    css="btn col-4"
                    isModalOpen={props.isModalOpen} 
                    setIsModalOpen={props.setIsModalOpen} 
                    labelClose="취소"
                />
            </div>


        </div>
  )
}

export default Login