import React, { Component } from 'react';
import "./Home.css";
import img1 from "../../assets/sakura1.png";
import img2 from "../../assets/sakura2.png";
import img3 from "../../assets/sakura3.png";

class Home extends Component {

    render() {
    return (
        <section className="home-container">
            <h2 id="home-header">Home Page</h2>
            <div className="set">
                <div><img src={img1} style={{height:"5rem"}}/></div>
                <div><img src={img2} style={{height:"5rem"}}/></div>
                <div><img src={img3} style={{height:"5rem"}}/></div>
                <div><img src={img1} style={{height:"5rem"}}/></div>
                <div><img src={img2} style={{height:"5rem"}}/></div>
                <div><img src={img3} style={{height:"5rem"}}/></div>
                <div><img src={img1} style={{height:"5rem"}}/></div>
                <div><img src={img2} style={{height:"5rem"}}/></div>
            </div>
            <div className="set set2">
                <div><img src={img1} style={{height:"5rem"}}/></div>
                <div><img src={img2} style={{height:"5rem"}}/></div>
                <div><img src={img3} style={{height:"5rem"}}/></div>
                <div><img src={img1} style={{height:"5rem"}}/></div>
                <div><img src={img2} style={{height:"5rem"}}/></div>
                <div><img src={img3} style={{height:"5rem"}}/></div>
                <div><img src={img1} style={{height:"5rem"}}/></div>
                <div><img src={img2} style={{height:"5rem"}}/></div>
            </div>
            <div className="set set3">
                <div><img src={img1} style={{height:"5rem"}}/></div>
                <div><img src={img2} style={{height:"5rem"}}/></div>
                <div><img src={img3} style={{height:"5rem"}}/></div>
                <div><img src={img1} style={{height:"5rem"}}/></div>
                <div><img src={img2} style={{height:"5rem"}}/></div>
                <div><img src={img3} style={{height:"5rem"}}/></div>
                <div><img src={img1} style={{height:"5rem"}}/></div>
                <div><img src={img2} style={{height:"5rem"}}/></div>
            </div>
        </section>
    )
    }
}

export default Home