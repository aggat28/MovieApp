import React from "react";


export default function Button({styles, txt, handlerClick}){

    return (
        <button className={styles} onClick={handlerClick}> {txt} </button>
    )
}