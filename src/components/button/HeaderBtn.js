import React from "react";

import "./buttons.css"

const HeaderBtn = ({url, btn_class, btn_txt, btn_img}) => {
    return (
        <a href={url} target="_blank" rel="noreferrer">
            <button className={btn_class}>
                <img src={btn_img} alt=""/>
                <span>{ btn_txt }</span>
            </button>
        </a>
    )
}

export default HeaderBtn