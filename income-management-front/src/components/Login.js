import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import ModalButton from './ModalButton'

const Login = (props) => {
  return (
    <div className='container mt-5'>
        <div className='text-center h2'>
            로그인
        </div>

        <ModalButton isModalOpen={props.isModalOpen} setIsModalOpen={props.setIsModalOpen} labelClose="취소"/>
    </div>
  )
}

export default Login