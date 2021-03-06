import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import img1 from "../../assets/sakura1.png";
import img2 from "../../assets/sakura2.png";
import img3 from "../../assets/sakura3.png";

function Home() {

    return (
        <section className="home-container">
            <div className="home-header-wrapper">
                <h3 id="home-header">SOPHIA JUNG</h3>
                <hr style={{borderColor: 'white'}}/>
                <p style={{fontWeight:'bold'}}>CREATIVITY &nbsp; &middot; &nbsp; COMMITMENT &nbsp; &middot; &nbsp; COMMUNITY</p>
                <hr style={{borderColor: 'white'}}/>
                <div className="enter-wrapper">
                <Link className="enter" to="/main" style={{textDecoration: 'none'}}>
                {/* <p className="enter">ENTER</p> */}
                &middot;&middot;&middot;ENTER&middot;&middot;&middot;
                </Link>
            </div>
            </div>
            <div className="set">
                <div><img src={img1} style={{height:"5rem"}}/></div>
                <div><img src={img2} style={{height:"5rem"}}/></div>
                <div><img src={img3} style={{height:"5rem"}}/></div>
                <div><img src={img1} style={{height:"5rem"}}/></div>
                <div><img src={img2} style={{height:"5rem"}}/></div>
                <div><img src={img3} style={{height:"5rem"}}/></div>
                <div><img src={img1} style={{height:"5rem"}}/></div>
                <div><img src={img2} style={{height:"5rem"}}/></div>
                <div><img src={img3} style={{height:"5rem"}}/></div>
            </div>
            <div className="set set2">
                <div><img src={img1} style={{height:"5rem"}}/></div>
                <div><img src={img2} style={{height:"5rem"}}/></div>
                <div><img src={img3} style={{height:"5rem"}}/></div>
                <div><img src={img3} style={{height:"5rem"}}/></div>
                <div><img src={img2} style={{height:"5rem"}}/></div>
                <div><img src={img3} style={{height:"5rem"}}/></div>
                <div><img src={img2} style={{height:"5rem"}}/></div>
                <div><img src={img2} style={{height:"5rem"}}/></div>
                <div><img src={img1} style={{height:"5rem"}}/></div>
            </div>
            <div className="set set3">
                <div><img src={img2} style={{height:"5rem"}}/></div>
                <div><img src={img2} style={{height:"5rem"}}/></div>
                <div><img src={img3} style={{height:"5rem"}}/></div>
                <div><img src={img1} style={{height:"5rem"}}/></div>
                <div><img src={img1} style={{height:"5rem"}}/></div>
                <div><img src={img1} style={{height:"5rem"}}/></div>
                <div><img src={img3} style={{height:"5rem"}}/></div>
                <div><img src={img2} style={{height:"5rem"}}/></div>
                <div><img src={img3} style={{height:"5rem"}}/></div>
            </div>
            <div className="set set4">
                <div><img src={img2} style={{height:"5rem"}}/></div>
                <div><img src={img2} style={{height:"5rem"}}/></div>
                <div><img src={img3} style={{height:"5rem"}}/></div>
                <div><img src={img1} style={{height:"5rem"}}/></div>
                <div><img src={img2} style={{height:"5rem"}}/></div>
                <div><img src={img3} style={{height:"5rem"}}/></div>
                <div><img src={img2} style={{height:"5rem"}}/></div>
                <div><img src={img1} style={{height:"5rem"}}/></div>
                <div><img src={img3} style={{height:"5rem"}}/></div>
            </div>
        </section>
    )
}

export default Home