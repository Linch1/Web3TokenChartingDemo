import React from "react";

const Title = ({title_txt}) => {
    return (
        <h1 className="home-title">
            <span className="red-text">BSC Chart </span>-{title_txt} 
        </h1>
    )
}

export default Title;