import React from "react"

export const Button = ({type,text,link}) =>{

    return(
        <div>
            <a href={link}><button className={type}>{text}</button></a>
        </div>
    )
}