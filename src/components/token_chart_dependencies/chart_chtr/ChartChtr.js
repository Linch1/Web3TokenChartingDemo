import React from "react";
//img
import bsc_scan from "../../../img/bsc-scan.png"

const ChartChtr = ({chtr_text, chtr_link}) => {
    return (
        <a className="chart-chtr" href={chtr_link} target="_blank" rel="noreferrer">
            <img className="bsc-img" src={bsc_scan} alt=""/>
            <span>{ chtr_text }</span>
        </a>
    )
}

export default ChartChtr;