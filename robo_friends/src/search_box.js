import React from "react";

const SearchBox = ({search_field, search_change}) => {
    return (
        <div className="pa2">
            <input 
                className="pa3 ba b--green bg-lightest-blue" 
                type='search' 
                placeholder="search bots"
                onChange={search_change}
            />
        </div>
    )
}

export default SearchBox