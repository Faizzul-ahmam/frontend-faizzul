import React from "react"
import {Link} from 'gatsby'

export const Button = ({type,text,link}) =>{

    return(
        <div>
            <Link to={link}><button className={type}>{text}</button></Link>
        </div>
    )
}