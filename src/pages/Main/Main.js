import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Portfolio from '../../components/Portfolio/Portfolio';
import About from '../../components/About/About';
import Jumbo from "../../components/Jumbo/Jumbo";
import Socials from "../../components/Socials/Socials";
import "./Main.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {
    return (
        <div className="main-container">
            <Navbar/>
            <Jumbo/>
            <div className="main-content" style={{position:'relative', zIndex:6, background:'#111'}}>
                <About/>
                <Portfolio/>
            </div>

        </div>
    )
}

export default Main
