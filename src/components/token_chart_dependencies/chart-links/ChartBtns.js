import React from "react";

const ChartBtns = ({btn_text, btn_link}) => {
    return (
        <a className="chart-btns" href={btn_link} target="_blank" rel="noreferrer">
            <span>{ btn_text }</span>
        </a>
    )
}

export default ChartBtns;