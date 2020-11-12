import React from 'react';
import "./Jumbo.css";
import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import SearchIcon from "@material-ui/icons/Search";
import BrushIcon from "@material-ui/icons/Brush";
import img1 from "../../assets/sakura1.png";
import img2 from "../../assets/sakura2.png";
import img3 from "../../assets/sakura3.png";
import Hex from "../Hex/Hex";

function Jumbo() {
    return (
        <div className="jumbo">
            <div className="jumbotron jumbotron-fluid">
                <div className="set jumbo-set">
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
            <div className="set set2 jumbo-set">
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
            <div className="set set3 jumbo-set">
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
                <div className="jumbo-content row">
                    <div className="col-6 grid-col">
                        <Hex/>
                    </div>
                    <div className="col-6 header-text">
                        <section id="intro">
                            <h5>HELLO</h5>
                            <h1>I AM SOPHIA JUNG</h1>
                            <p><strong>&lt;&nbsp;&gt;&nbsp; developer</strong>
                            <br/>
                            <strong><FilterDramaIcon/>&nbsp;&nbsp;dreamer</strong>
                            <br/>
                            <strong><SearchIcon/>&nbsp;&nbsp;discoverer</strong>
                            <br/>
                            <strong><BrushIcon/>&nbsp;&nbsp;designer</strong></p>
                        </section>
                    </div>
                    <div className="jumbo-divider">
                        <p> CREATIVITY &middot; COMMITMENT &middot; COMMUNITY </p>
                    </div>
                </div>
            </div>
            {/* <div className="blur"></div> */}
        </div>
    )
}

export default Jumbo


{/* <section className="jumbo-col" style={{position:'absolute',left:0}}>
<FilterDramaIcon/><strong>&nbsp;dreamer&nbsp;</strong> <FilterDramaIcon/>
<p>Every great progression, movement, or product begins with a dream. As the world becomes more interconnected, technology becomes more powerful, and tools become more accessible, this generation inches closer and closer to turning its dreams into a reality. While I can be an implementer, I strive to continue to open my mind to the possibilities of the future.</p>
</section>
<section className="jumbo-col2" style={{position:'absolute',left:'30%'}}>
<p><small>HELLO</small></p>
<p>I'M SOPHIA JUNG</p>
</section>
<section className="jumbo-col" style={{position:'absolute',right:0}}>
<strong>&lt;developer&gt;</strong>
<p>In the modern age, the ability to express one's thoughts, ideas, or products though technological platforms has become crucial. I am passionate about helping people and organizations pursue such an endeavor. I particularly enjoy the blend of technical and creative skill that is required, as well as the dyanmic aspect of the field, which always pushes me to learn new things and approach problems in new ways.</p>
</section> */}