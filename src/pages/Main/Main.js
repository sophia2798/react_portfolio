import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Portfolio from '../../components/Portfolio/Portfolio';
import About from '../../components/About/About';
import Jumbo from "../../components/Jumbo/Jumbo";
import "./Main.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {
    return (
        <div className="main-container">
            <Navbar/>
            <Jumbo/>
            <h1>MAIN PAGE</h1>
            <About/>
            <Portfolio/>
        </div>
    )
}

export default Main
