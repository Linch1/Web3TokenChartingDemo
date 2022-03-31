import React from "react";

import "./style.css";


const SearchInput = ({ search, setSearch, showResult}) => {
    
    return (
        <div className="plus-flex">
            <div className="position-relative ">
                <input
                    className="width-130"
                    type="text"
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                    value={search}
                    placeholder="Enter token name / address..."
                />
            </div>
            <button className="search_btn">
                Search
            </button>
        </div>
    )
}

export default SearchInput;