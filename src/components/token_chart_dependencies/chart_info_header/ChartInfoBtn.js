import React from "react"

const ChartInfoBtn = ({btn_text, setInfoContent, bodyContent, class_active}) => {
    return (
        <button className={`headers-info-btn ${class_active}`} onClick={() =>setInfoContent(bodyContent)}>
            <span> {btn_text} </span>
        </button>
    )
}

export default ChartInfoBtn;