import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../static/css/login.css";

import ModalButton from "./ModalButton";

import kakaoButton from "../images/kakao-login-button.png";
import naverButton from "../images/naver-login-button.png";

const Login = ({ isLoginOpen, setIsLoginOpen, setIsLogin }) => {
    const closeModal = () => {
        setIsLoginOpen(!isLoginOpen);
    };

    const login = () => {
        setIsLogin(true);
        setIsLoginOpen(false);
    };

    const buttonStyle = {
        width: "40%",
    };

    return (
        <div className="container mt-5">
            <div className="text-center h2">로그인</div>

            <div className="row p-3 mb-3">
                <img
                    src={kakaoButton}
                    alt="Kakao Login"
                    className="img-fluid w-100 mb-3"
                    style={buttonStyle}
                    onClick={() => {
                        window.location.href =
                            "https://kauth.kakao.com/oauth/authorize?client_id=275a6d69ef69fd06acf31e286ca672dd&redirect_uri=http://localhost/v1/login/kakao&response_type=code";
                    }}
                    id="loginButton"
                />
                <img
                    src={naverButton}
                    alt="Naver Login"
                    className="img-fluid w-100"
                    style={buttonStyle}
                    id="loginButton"
                />
            </div>

            <hr />

            <form className="mt-4">
                <div className="form-group mb-4">
                    <label htmlFor="" className="">
                        아이디
                    </label>
                    <input type="text" name="" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="">
                        비밀번호
                    </label>
                    <input
                        type="password"
                        name=""
                        id=""
                        className="form-control"
                    />
                </div>
                <div className="row mb-3 mt-3">
                    <div className="col-6">
                        <button
                            className="btn btn-success col-12"
                            type="disabled"
                        >
                            로그인
                        </button>
                    </div>
                    <div className="col-6">
                        <div
                            className="btn btn-danger col-12"
                            onClick={closeModal}
                        >
                            취소
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
