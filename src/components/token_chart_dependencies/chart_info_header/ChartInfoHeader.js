import React, { useContext } from "react"//call context hook

//component
import ChartInfoBtn from "./ChartInfoBtn";

//context
import ChartInfoContext from "../../../store/chartInfo-context";//call component with data

const ChartInfoHeader = () => {

    const bodyContentInfo = useContext(ChartInfoContext)//assign variable to the object exported in the component with data, so we can use it where we want

    return (
        <div className="chart-info-header">
            <ChartInfoBtn btn_text="Token TX" bodyContent='token-tx' class_active={bodyContentInfo.activeBtn('token-tx')} setInfoContent={bodyContentInfo.setContent} />
            <ChartInfoBtn btn_text="Liquidity Info" bodyContent='liquidity-info' class_active={bodyContentInfo.activeBtn('wallet-tx')} setInfoContent={bodyContentInfo.setContent}/>                          
        </div>
    )
}

export default ChartInfoHeader;