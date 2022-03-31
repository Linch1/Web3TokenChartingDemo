import React from "react"

//component
import Address from "../address/Address";
import UtilsToken from "../../utils/token";

const ChartTag = ({
    token_address,
    token_chain
}) => {
    // let [copied, setCopied] = useState(false);

    return (
        <div className="token-address-tag">
            <img className="bsc" src={UtilsToken.getChainLogo(token_chain ? token_chain : 'bsc' )} alt="bsc"/>
            <span className="uppercase">{token_chain}: </span>
            <Address address={token_address} />
        </div>
    )
}

export default ChartTag;