import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "./Navbar.css";
import { HashLink } from 'react-router-hash-link';
import Socials from "../../components/Socials/Socials";
import Resume from "../../assets/resume_09_2020.pdf";
// import logo from "../../assets/logo2.png";

function Navbar() {
    return (
        <div className='Navbar' style={{position:'relative', zIndex:6}}>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'#171717'}}>
            <Link className="navbar-brand" to="/main">SOPHIA JUNG</Link>
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
                    <a href={Resume} alt="resume" style={{margin:0,color:'white'}}target="blank"><p style={{margin:0,paddingTop:'0.5rem'}}>Resume</p></a>
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-link" to="#">Contact</Link>
                </li> */}
                <li className="nav-item">
                    <Socials/>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    )
}

export default Navbar;