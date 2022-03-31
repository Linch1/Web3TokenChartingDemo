import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, } from '@fortawesome/free-solid-svg-icons'

//style import
import "./popup.css";

const Popup = ( { title, text, popupStatus, setPopupStatus, onClose, type } ) => {

    const closePopup = () => { 
        setPopupStatus(false);  
        if( onClose ) onClose();
    }

    if(popupStatus)
        setTimeout( () => { closePopup(); }, 10000 ); // close popup after 8 seconds

    return(
        <aside className={`${popupStatus ? " open" :""} popup-container`} >
            
            <div className='popup' >
                <div className="title">
                    {
                        type == 'error' ? 
                        <FontAwesomeIcon color={"red"} icon={faTimesCircle} onClick={ closePopup } />: 
                        <FontAwesomeIcon color={"green"} icon={faCheckCircle} onClick={ closePopup } />
                    }
                    <h5>{title}</h5>
                </div>
                
                <div className="popup-text">
                    { text } { popupStatus }
                </div>
            </div>
        </aside>
    )
}

export default Popup;