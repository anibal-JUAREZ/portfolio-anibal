import React, {useState} from 'react';

import  './NavBar.css';
const NavBar=()=> {

    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler");
    const navToggle = () =>{
        active==="nav__menu" ? setActive("nav__menu nav__active") : setActive("nav__menu");  
        //togglerIcon

        toggleIcon ==="nav__toggler" ?  setToggleIcon("nav__toggler toggle") : setToggleIcon("nav__toggler");
    }
    return (
        
           
           <nav className="nav">
                <>
                <a href="index.html" className="nav__brand">ajuarez</a>
                <ul className={active}>
                    <li className="nav__item">
                        <a href='' className="nav__link">accueil</a>
                    </li>
                    <li className="nav__item">
                        <a href="#my_information" className="nav__link">à propos de moi</a>
                    </li>
                    <li className="nav__item">
                        <a href="#projects" className="nav__link">projets</a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact-section" className="nav__link">contact</a>
                    </li>
                </ul>
                </>
                <div onClick = {navToggle} className={toggleIcon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>

                </div>
                    
                        
                    
                        
                   
                    

                   
           </nav>

     
    );
}

export default NavBar;