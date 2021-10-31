import React, { useState, useEffect }  from "react";


export const UserContext = React.createContext({});

export default function UserContextProvider({children}){

    const [isLoginUser, setIsLoginUser] = useState(false);
    const [user, setuser] = useState({
        email: "",
        password: "",
        uid: '',
        isError: false
    });

    useEffect(() => {
        if(!isLoginUser){
            setuser({
                email: "",
                password: "",
                uid: '',
                isError: false
            })
        }
    }, [isLoginUser])

    useEffect(() => {
        const uid = JSON.parse(localStorage.getItem('authUser'))?.uid || '';
        if(uid)
        {
            setuser({...user, uid: uid});
            setIsLoginUser(true);
        }
    }, []);

    return (
        <UserContext.Provider value={{
            isLoginUser, setIsLoginUser, setuser, user
        }}>
            {children}
        </UserContext.Provider>
    )
};