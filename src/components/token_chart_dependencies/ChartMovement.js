import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";

const ChartMovement = ({token_movement, isPositive}) => {
    const renderArrow = () => {
        if(isPositive) {
            return <FontAwesomeIcon icon={faSortUp} />
        } else {
            return <FontAwesomeIcon icon={faSortDown} />
        }
    }
    return (
        <div className={`movement ${isPositive ? "green" : "red"}`}>
            { renderArrow() }
            <span> {token_movement} %</span>
        </div>
    )
}

export default ChartMovement;