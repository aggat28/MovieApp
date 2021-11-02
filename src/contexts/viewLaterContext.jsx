import React, { useEffect, useState }  from "react";


export const ViewLaterContext = React.createContext({});

export default function ViewLaterContextProvider({children}){

    const [viewLater, setViewLater] = useState([]);

    return (
        <ViewLaterContext.Provider value={{
            viewLater, setViewLater
        }}>
            {children}
        </ViewLaterContext.Provider>
    )
};