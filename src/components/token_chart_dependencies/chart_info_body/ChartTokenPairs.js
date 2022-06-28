import React from "react";
import EnumChainId from "../../../enum/chain.id";
import UtilsToken from "../../../utils/token";
const ChartTokenPairs = ({
    pairs
}) => {

    let sortedPairs = [];
    for( let pair in pairs ){
        pairs[pair].pairAdd = pair;
        sortedPairs.push( pairs[pair] );
    }
    console.log('Sorted pairs: ', sortedPairs)
    sortedPairs.sort( (a, b) => { return b.mainReserveValue - a.mainReserveValue });

    return (
        <table className="chart-table-info liquidity">
            <thead>
                <tr className="chart-table-header">
                    <th></th>
                    <th>Pair</th>
                    <th>Dex Pair</th>
                    <th>Liquidity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    sortedPairs.map( (pair, index) => {
                        let router = pair.router;
                        let pairAdd = pair.pairAdd;
                        return(
                            <tr className={`chart-table-body`}>
                                <td><img className="router-logo" src={UtilsToken.getRouterLogo(router)}></img></td>
                                <td> {UtilsToken.getRouterName(router)} </td>
                                <td><a href={UtilsToken.getExplorerLinkContract(EnumChainId.BSC, pairAdd)} target="_blank">{pair.tokens[0]}/{pair.tokens[1]}</a></td>
                                <td>$ {parseFloat(pair.mainReserveValue?.toFixed(1)).toLocaleString()}</td>
                                <td>$ {pair.value?.toFixed(3)}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}


export default ChartTokenPairs;