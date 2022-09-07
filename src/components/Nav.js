import React, { useState } from "react"
import {Link} from 'gatsby'
import logo from '../images/logo.svg'
import logo_secondary from '../images/logo_secondary.svg'
import {Menu} from "./Menu"


export const Nav = ({isSecondary = false}) =>{

    const [menuIsShowing,setmenuVisibility] = useState(false)

    const toggleMenu = () =>{

        setmenuVisibility(!menuIsShowing);
    }

    return(
        <nav>
            <section className="nav-wrapper">
                <a href="/" className="brand-logo"><img src={isSecondary?logo_secondary:logo}></img></a>
                <div className={`hamburger${menuIsShowing?' menu-show':''}`} onClick={toggleMenu}>
                    <span className={`bar${isSecondary?' secondary':''}`}></span>
                    <span className={`bar${isSecondary?' secondary':''}`}></span>
                    <span className={`bar${isSecondary?' secondary':''}`}></span>
                </div>
            </section>
            <Menu showMenu={menuIsShowing} setToggle={toggleMenu}/>
        </nav>
            
    )
}