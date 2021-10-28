import React, { useState } from "react";

import './search.scss';

export default function Search({handleEnter}) {

    const [search, setsearch] = useState('');
    
   const enterHandler = (e) => {
        if (e.key === 'Enter') {
            handleEnter(search);
        }
    }

    return (
            <input className="search_input" type="search" placeholder="search..."
                    value={search} 
                    onChange={(e) => setsearch(e.target.value)}
                    onKeyUp = {enterHandler}/>
    )
}