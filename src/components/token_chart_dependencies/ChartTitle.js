import React from "react";

const ChartTitle = ({token_img, token_name}) => {
    return (
        <div className="title-container">
            <img className="token-img" src={`${process.env.REACT_APP_VOTING_SERVER_URL}/image/${token_img}`} alt=""/>
            <h2 className="token-title">{token_name}</h2>
        </div>
    )
}

export default ChartTitle;