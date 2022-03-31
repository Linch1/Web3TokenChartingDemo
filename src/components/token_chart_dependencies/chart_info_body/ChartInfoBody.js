import React, { useContext, useEffect, useState } from "react";

//context
import ChartInfoContext from "../../../store/chartInfo-context";
//import useWebSocketLite from "../../../utils/websocket";
import ChartTokenPairs from "./ChartTokenPairs";

//components
import ChartTokenTx from "./ChartTokenTx";

const ChartInfoBody = ({
    transactions,
    pairs,
    contract,
    price
}) => {

    const bodyContentInfo = useContext(ChartInfoContext);

    // const ws = useWebSocketLite({
    //     socketUrl: `${process.env.REACT_APP_CHART_WEBSOCKET}?path=token&token=${contract}`
    // });
    
    let [newTx, setNewTx] = useState([]);

    // receive messages
    // useEffect(() => {
    //     if (ws.data) {
    //         const { message } = ws.data;
    //         if( message.transactions ){
    //             console.log('New transactions: ', message.transactions)
    //             setNewTx( message.transactions )
    //         }
    //     }
    // }, [ws.data]);

    return (
        <div className="chart-info-body">
            <div className={`${bodyContentInfo.activeContent("token-tx")}`}>
                <ChartTokenTx transactions={transactions} newTx={newTx} price={price}/>
            </div>

            <div style={{color: "var(--white)"}} className={`${bodyContentInfo.activeContent("liquidity-info")}`}>
                <ChartTokenPairs pairs={pairs}/>
            </div>
        </div>
    )
}

export default ChartInfoBody;