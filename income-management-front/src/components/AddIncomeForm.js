import React from "react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

const AddIncomeForm = (props) => {
    const closeForm = () => {
        props.setIsIncomeOpen(false);
    };

    const today = new Date(Date.now());
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth() + 1;
    const todayDay = today.getDate();

    return (
        <div className="container">
            <div className="h2 text-center mt-5">수입추가</div>

            <form className="form-row mb-5">
                <div className="form-group m-3">
                    <div className="row">
                        <div className="col">
                            <label for="incometype">수입종류 </label>
                            <select className="form-control">
                                <option>주수입</option>
                                <option>부수입</option>
                                <option>양도차익</option>
                                <option>배당</option>
                                <option>기타</option>
                            </select>
                        </div>
                        <div className="col">
                            <label for="incometypedetail">상세수입</label>
                            <select className="form-control">
                                <option>-</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="form-group m-3">
                    <div className="row">
                        <div className="col">
                            <label for="incomevalue">수입금액</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="숫자만 입력해 주세요"
                            />
                        </div>

                        <div className="col">
                            <label for="incomecurrency">통화</label>
                            <select className="form-control">
                                <option>🇰🇷 한국 원(₩)</option>
                                <option>🇺🇸 미국 달러($)</option>
                                <option>🇯🇵 일본 엔화(¥)</option>
                                <option>🇪🇺 유럽 유로(€)</option>
                                <option>🇨🇳 중국 위안(¥)</option>
                                <option>🇬🇧 영국 파운드(£)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="form-group m-3">
                    <label for="incomedate">날짜</label>
                    <div className="row">
                        <div className="col">
                            <select className="form-control">
                                {[...Array(10).keys()]
                                    .map((i) => i + todayYear - 9)
                                    .reverse()
                                    .map((year) => {
                                        return (
                                            <option
                                                value={year}
                                                selected={todayYear == year}
                                            >
                                                {year}년
                                            </option>
                                        );
                                    })}
                            </select>
                        </div>
                        <div className="col">
                            <select className="form-control">
                                {[...Array(11).keys()].map((month) => {
                                    return (
                                        <option
                                            value={month + 1}
                                            selected={todayMonth == month + 1}
                                        >
                                            {month + 1}월
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="col">
                            <select className="form-control">
                                {[...Array(30).keys()].map((date) => {
                                    return (
                                        <option
                                            value={date + 1}
                                            selected={todayDay == date + 1}
                                        >
                                            {date + 1}일
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="form-group m-3">
                    <label for="memo">메모</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="이 수입에 대해 설명해 주세요"
                    />
                </div>

                <div className="row">
                    <div className="text-center">
                        <button
                            className="btn btn-success col-4 m-2"
                            type="submit"
                        >
                            등록
                        </button>
                        <button
                            className="btn btn-danger col-4 m-2"
                            onClick={closeForm}
                        >
                            취소
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddIncomeForm;
