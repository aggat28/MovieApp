import React, { useState }  from "react";


export const UserContext = React.createContext({});

export default function UserContextProvider({children}){

    const [isLoginUser, setIsLoginUser] = useState(false);
    const [user, setuser] = useState({
        email: "",
        password: "",
        isError: false
    });

    return (
        <UserContext.Provider value={{
            isLoginUser, setIsLoginUser, setuser, user
        }}>
            {children}
        </UserContext.Provider>
    )
};