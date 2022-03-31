import React, { useEffect, useState } from "react";

import getTokenListBySearch from "../../api/search";

//fontawesome icons
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResult";
import "./style.css";

const Search = ({isOpenLink, onResultClick }) => {

    
    /** HANDLE SEARCH */
	let [search, setSearch] = useState("");
    const [delay, setDelay] = useState("")
    let [showResult, setShowResult] = useState(false);
    const [results, setResults] = useState([]);

    useEffect(() => {
       const delayed = setTimeout(() => {
            setDelay(search)
        }, 500)

        return () => {
            clearInterval(delayed)
        }
    }, [search])

    useEffect( () => {
        if(delay) setShowResult(true)
        else setShowResult(false)
    }, [delay])

    useEffect(() => {
        if(delay)
           ( async () => {
                let res = await getTokenListBySearch(delay)
                setResults(res.success.data)
           })()
    },[delay])

	/** END HANDLE SEARCH */
    // console.log('MAIN: ',  isOpenLink, results, setSearch)
    return (
        <div className={showResult? "search c-mr-2 width-190" : "search c-mr-2 width-190"}>
            <SearchInput search={search} setSearch={setSearch} showResult={showResult} />
            <SearchResults isOpenLink={isOpenLink} setShowResult={setShowResult} showResult={showResult} results={results} setSearch={setSearch} onResultClick={onResultClick} />
        </div>
    )
}


export default Search;