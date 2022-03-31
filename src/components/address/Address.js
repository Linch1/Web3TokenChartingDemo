import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from "@fortawesome/free-solid-svg-icons";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import "./address.css";
import Popup from "../popup/Popup";

function Address({ address }) {
    
    let [copied, setCopied] = useState(false);

    return (
        <React.Fragment>
            <div className="address-link-container">
                <a href={"/"} target="_blank" rel="noopener noreferrer" className="address-link" >
                    <span className="mx-auto d-block">
                       { address ? `${address.substring(0,10)}...${address.substring(address.length-10,address.length)}`: 'undefined'}
                    </span>
                </a>
                <CopyToClipboard text={address} onCopy={() => { setCopied(true) }}>
                    <FontAwesomeIcon icon={faClone} />
                </CopyToClipboard>
            </div>
            <Popup popupStatus={copied} setPopupStatus={setCopied} title={"Copied to clipboard"} />
        </React.Fragment>
    )
}

export default Address;