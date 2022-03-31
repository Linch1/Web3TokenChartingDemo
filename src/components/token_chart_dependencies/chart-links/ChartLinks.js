import React from "react";

import ChartBtn from "./ChartBtns";
import UtilsToken from "../../../utils/token";

const ChartLinks = ({btn1_text, btn2_text, website, telegram, token_chain, token_contract}) => {
    return (
        <div className="chart-btns-container">
            <ChartBtn btn_text={btn1_text} btn_link={UtilsToken.getDexLink(token_chain, token_contract)} />
            { website && <ChartBtn btn_text={"Website"} btn_link={website} /> }
            { telegram && <ChartBtn btn_text={"Telegram"} btn_link={telegram} /> }
        </div>
    )
}

export default ChartLinks;