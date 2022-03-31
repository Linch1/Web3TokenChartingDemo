import React from "react";
import UtilsToken from "../../../utils/token";

//component
import ChartChtr from "./ChartChtr";

const ChtrList = ({
    symbol,
    address,
    chain
}) => {

    console.log('LINK: ', UtilsToken.getExplorerLink( chain, address ))
    return (
        <div className="chtr-list">
            <ChartChtr chtr_text={`${symbol} Transaction`} chtr_link={UtilsToken.getExplorerLink( chain, address )} />
            <ChartChtr chtr_text={`${symbol} Contract`} chtr_link={UtilsToken.getExplorerLinkContract( chain, address )} />
            <ChartChtr chtr_text={`${symbol} Holder`} chtr_link={UtilsToken.getExplorerLinkHolders( chain, address )} />
        </div>
    )
}

export default ChtrList;