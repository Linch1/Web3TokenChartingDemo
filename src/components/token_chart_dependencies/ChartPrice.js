import React from "react";

import UtilNumber from "../../utils/numbers"
import ChartMovement from "./ChartMovement";

const ChartPrice = ({token_price, token_movement}) => {
    return (
        <div className="price-movement">
            <p className="token-price">${UtilNumber.shrinkNumberZeros(token_price)}</p>
            <ChartMovement token_movement={token_movement || '--'} isPositive={ token_movement > 0}/>
        </div>
    )
}

export default ChartPrice;