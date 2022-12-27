import React from "react";

const Header=()=>{
    return(
        <div className="section" >
         <nav className="main-navbar" id="main-navbar">
            <div className="logo-area">
                <a className="navbar-brand" href="#page-top"> 
                    <div className="logo-topTxt">SWIM</div>
                    <div className="logo-bottomTxt"> Spread Wisdom Mission </div>
                </a>
            </div>
            <div className="menu-area">
                <div className="topnav" id="myTopnav">
                    <a href="#">&nbsp;</a>
                    <a href="/about">AboutUs</a>
                    <a href="/resources">Resources</a>
                    <a href="/contact">Contact</a>
                    <a href="/more">More</a>
                    <a href="#" className="icon" onClick="menudynamic()">&#9776;</a>
                </div>
            </div>
        </nav>
        </div>
    )
}
export default Header;