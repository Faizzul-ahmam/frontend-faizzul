import React from "react"
// import {Link as a} from 'gatsby'

export const Menu = ({showMenu,setToggle}) =>{

    return(
        
        <div className={`menu${showMenu?' show':''}`}>
            <ul>
                <a href='/#about'><li onClick={setToggle}>About</li></a>
                <a href='/#project'><li onClick={setToggle}>Project</li></a>
                <a href='/blogs'><li onClick={setToggle}>Blog</li></a>
                <a href='/#contact'><li onClick={setToggle}>Contact</li></a>
            </ul>
        </div>
    )
}