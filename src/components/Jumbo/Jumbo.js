import React from 'react';
import "./Jumbo.css";
import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import img1 from "../../assets/sakura1.png";
import img2 from "../../assets/sakura2.png";
import img3 from "../../assets/sakura3.png";

function Jumbo() {
    return (
        <div className="jumbo">
            <div className="jumbotron jumbotron-fluid">
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
                <div><img src={img1} style={{height:"5rem"}}/></div>
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
            <div className="jumbo-content">
                <section className="jumbo-col" style={{position:'absolute',left:0}}>
                    <FilterDramaIcon/><strong>&nbsp;dreamer&nbsp;</strong> <FilterDramaIcon/>
                    <p>Every great progression, movement, or product begins with a dream. As the world becomes more interconnected, technology becomes more powerful, and tools become more accessible, this generation inches closer and closer to turning its dreams into a reality. While I can be an implementer, I strive to continue to open my mind to the possibilities of the future.</p>
                </section>
                <section className="jumbo-col2" style={{position:'absolute',left:'30%'}}>
                I AM A . . .
                </section>
                <section className="jumbo-col" style={{position:'absolute',right:0}}>
                    <strong>&lt;developer&gt;</strong>
                    <p>In the modern age, the ability to express ideas and products through websites or mobile applications is crucial. Web development requires a blend of technical and creative skill while also being an everchanging field. The constant innovation always pushes me to always be learning and approach problems in new ways.</p>
                </section>
            </div>
            </div>
            <div className="blur"></div>
        </div>
    )
}

export default Jumbo
