import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

import ModalButton from './ModalButton'

const Login = ({isLoginOpen, setIsLoginOpen, setIsLogin}) => {

    const closeModal = () => {
        setIsLoginOpen(!isLoginOpen)
    }

    const login = () => {
        setIsLogin(true)
        setIsLoginOpen(false)
    }

  return (
        <div className='container mt-5'>
            <div className='text-center h2'>
                로그인
            </div>

            <form>
                <div className='form-row mb-5'>
                    <div className='form-group col-md-6 col-lg-11 m-3'>
                        <label for='inputemail4'>아이디</label>
                        <input 
                            type="text" 
                            className='form-control' 
                            id='inputEmail4'
                            placeholder='아이디를 입력해 주세요'
                            />
                    </div>
                    <div className='form-group col-md-6 col-lg-11 m-3'>
                        <label for="inputPassword4">비밀번호</label>
                        <input 
                            type="password" 
                            className='form-control' 
                            id="inputPassword4"
                            placeholder='비밀번호를 입력해 주세요'
                        />
                    </div>

                    <div className='row mt-5'>
                        <div className='col-12 text-center'>
                            <Button 
                                className='btn col-4 btn-success m-1'
                                onClick={login}
                            >
                                로그인
                            </Button>

                            <Button 
                                className="btn col-4 btn-danger m-1"
                                onClick={closeModal}    
                            >
                                취소
                            </Button>
                        </div>
                    </div>


                </div>
            </form>




        </div>
  )
}

export default Login