import React from "react";

import { MdOutlineAddCircle as AddIcon } from "react-icons/md";

const FloatingButton = (props) => {
    return (
        <div>
            <AddIcon
                style={{
                    position: "fixed",
                    right: "5vh",
                    bottom: "10vh",
                    fontSize: "75px",
                }}
                className="text-primary"
                onClick={() => {
                    props.setIsIncomeOpen(true);
                }}
            />
        </div>
    );
};

export default FloatingButton;
