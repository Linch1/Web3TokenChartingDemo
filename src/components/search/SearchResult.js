import React, {useEffect, useRef} from "react";

import { Link } from "react-router-dom";

//fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import UtilsToken from "../../utils/token";


const SearchResults = ({isOpenLink, setSearch, results, onResultClick, showResult, setShowResult}) => {

    const ref = useRef();

    useEffect(() => {
        document.body.addEventListener('click', (event) => {
            if(ref.current && ref.current.contains(event.target)) {
                return;
            }
            setShowResult(false)
            setSearch("")
        })
    },[])

    return (
        <div className={ (showResult && results && results.length) ? "dropdown-search open" : "dropdown-search"}>
            <div className="results">
                <div className="results-list">
                    <div className="results-text">   
                        <p className="result-p">Results 🔥</p>
                        <span className="close-icon" onClick={()=> {setSearch("")}}>
                            <FontAwesomeIcon
                            icon={faTimesCircle}
                            />
                        </span>
                    </div>
                    <ul>
                        {   
                            results ?
                            results.map((el, index) => {
                                function getElemContent(){
                                    return (
                                        <React.Fragment key={el._id}>
                                            <Link ref={ref} to={`/tokens/${el.contract}`} className="result-item" onClick={ () => { if(onResultClick) onResultClick(el) }}>
                                                {/* <img src={`${process.env.REACT_APP_VOTING_SERVER_URL}/image/${el.logo}`} alt=""/> */}
                                                <div>
                                                    <p>{el.name || "Title"}</p>
                                                    <span>{el.symbol || "Symbol"}</span>
                                                </div>
                                            </Link>
                                        </React.Fragment>
                                    )
                                }
                                if(isOpenLink) return( <li>
                                             <Link key={el._id} to="/"> {getElemContent()} </Link>
                                        </li>
                                    )
                                else return <li key={el._id}> {getElemContent()} </li>
                            }) : ''
                        }
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SearchResults;