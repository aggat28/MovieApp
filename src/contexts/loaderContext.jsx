import React, {useState} from "react";
import Loader from 'react-loader-spinner';
import './laoderContext.scss';

export const LoaderContext = React.createContext({});

export default function LoaderContextProvider({children}) {

    const loader = (
        <div className="laoderContext">
            <div className="laoderContext_container">
                <Loader type="ThreeDots" color="#00BFFF"
                    height={100}
                    width={100}/>
            </div>
        </div>
    );

    const [isShowLoader, setisShowLoader] = useState(false)


    return (
        <LoaderContext.Provider value={
            {loader, isShowLoader, setisShowLoader}
        }>
            {children} </LoaderContext.Provider>
    )
};
