import React from "react"
import {Link} from 'gatsby'

export const Menu = ({showMenu,setToggle}) =>{

    return(
        
        <div className={`menu${showMenu?' show':''}`}>
            <ul>
                <Link to='#about'><li onClick={setToggle}>About</li></Link>
                <Link to='#project'><li onClick={setToggle}>Project</li></Link>
                <Link to='/insight'><li onClick={setToggle}>Insight</li></Link>
                <Link to='#contact'><li onClick={setToggle}>Contact</li></Link>
            </ul>
        </div>
    )
}