import React from "react";
import { NavLink } from "react-router-dom";
const Header=()=>{
    return(
        <div>
         <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#page-top">SadGuru</a>
                <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item mx-0 mx-lg-1"><NavLink class="nav-link py-3 px-0 px-lg-3 rounded" to="/home">Home</NavLink></li>
                        <li class="nav-item mx-0 mx-lg-1"><NavLink class="nav-link py-3 px-0 px-lg-3 rounded" to="/about">About</NavLink></li>
                        <li class="nav-item mx-0 mx-lg-1"><NavLink class="nav-link py-3 px-0 px-lg-3 rounded" to="/contact">Contact</NavLink>   </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    )
}
export default Header;