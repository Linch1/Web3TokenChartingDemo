import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import UtilsToken from "../../../utils/token";
const ChartTokenTx = ({
    transactions,
    newTx,
    price
}) => {

    let { contract } = useParams();

    let [retrivedTx, setRetrivedTx] = useState( transactions );
    let [previousNew, setPreviousNew] = useState([]);
    useEffect( () => {
        let txs = [ ...retrivedTx, ...previousNew ].sort( (a,b) => b.time - a.time  );
        let record = {};
        for( let i = txs.length - 1; i >= 0; i-- ){ // remove cloned prices from list
            let tx = txs[i];
            if( !record[tx.hash + tx.type] ) record[tx.hash + tx.type] = true;
            else txs.splice(i, 1); // remove cloned element
        }
        setRetrivedTx(txs);
        setPreviousNew(newTx);
        console.log('Total tx retrived: ', retrivedTx.length)
    }, [newTx])

    function renderTransactions( list, animation ){
        return list.map( (tx, index) => {

            let isSelling = tx.tokenIn.toLowerCase() == contract.toLowerCase();
            let amount = tx.tokenIn.toLowerCase() == contract.toLowerCase() ? tx.amountIn : tx.amountOut;

            let animationText = animation ? ( !isSelling ? 'bg-move-buy': 'bg-move-sell' ) : '';
            return(
                <tr className={`chart-table-body ${ !isSelling ? "buy": "sell"} ${animationText}`}>
                    {/* <td>{parseFloat(tx.amount.toFixed(1)).toLocaleString()}</td> */}
                    <td>{parseFloat((amount * price).toFixed(1)).toLocaleString()} $</td>
                    <td>{UtilsToken.getPrice(amount, false)}</td>
                    <td>{new Date(tx.time*1000).toLocaleTimeString()}</td>
                    <td>
                        <a href={`https://bscscan.com/tx/${tx.hash}`} target="_blank">
                        {tx.hash.substring(0,5) + '...' + tx.hash.substring(tx.hash.length-5,tx.hash.length)}
                        </a>
                    </td>
                </tr>
            )
        })
    }

    return (
        <table className="chart-table-info">
            <thead>
                <tr className="chart-table-header">
                    {/* <th>Tokens</th> */}
                    <th>Total</th>
                    <th>Amount</th>
                    <th>Time</th>
                    <th>Tx</th>
                </tr>
            </thead>
            <tbody>
                {/* { renderTransactions( newTx, true ) }
                { renderTransactions( retrivedTx ) } */}
                { renderTransactions( transactions ) }
            </tbody>
        </table>
    )
}

export default ChartTokenTx;