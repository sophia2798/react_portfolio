import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "./Navbar.css";
import { HashLink } from 'react-router-hash-link';
import logo from "../../assets/logo2.png";

function Navbar() {
    return (
        <div className='Navbar'>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'#171717'}}>
            <Link className="navbar-brand" to="/main"><img src={logo} alt="logo" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <HashLink className="nav-link" to="/main#about-me">About <span className="sr-only">(current)</span></HashLink>
                </li>
                <li className="nav-item">
                    <HashLink className="nav-link" to="/main#portfolio-content">Portfolio</HashLink>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Contact</Link>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    )
}

export default Navbar;