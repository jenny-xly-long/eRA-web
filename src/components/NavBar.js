import React, { Component } from 'react';
import "../components/NavBar.css"
import navlogo from "../images/NavLogo.png";
import navlogo2 from "../images/NavLogoWithoutBranding.png";


class NavBar extends Component {
    render(){ 
        return (
            <nav class="navbar navbar-fixed-top">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>                        
                        </button>
                        <a class="navbar-brand" href="#home"><img class="nav-img" src={navlogo2}/></a>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#about">About</a></li>
                        <li><a href="#product">Product</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;


