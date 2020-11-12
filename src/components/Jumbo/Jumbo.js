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
                {/* <div className="set jumbo-set">
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
            </div> */}
                <div className="jumbo-content row">
                    <div className="col-6 grid-col">
                        <ul id="hexGrid">
                            <li class="hex">
                                <div class="hexIn" href="#">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUKzK4DgFftnLNJE5N8DkGfeCRq8_amqbSYg&usqp=CAU" alt="" />
                                    <h1>This is a title</h1>
                                    <p>Some sample text about the article this hexagon leads to</p>
                                </div>
                            </li>
                            <li class="hex">
                                <div class="hexIn" href="#">
                                    <img src="https://media.istockphoto.com/photos/black-and-white-colourclose-up-fingers-typing-on-the-computer-picture-id1047951828?k=6&m=1047951828&s=170667a&w=0&h=9SKefXT1mVnxjKYRBRsI4vyYhKmWOmAl_n_OGdC38Ko=" alt="" />
                                    <h1>This is a title</h1>
                                    <p>Some sample text about the article this hexagon leads to</p>
                                </div>
                            </li>
                            <li class="hex">
                                <div class="hexIn" href="#">
                                    <img src="https://images.fineartamerica.com/images-medium-large/black-and-white-sky-with-building-storm-clouds-photo-poster-print-keith-webber-jr.jpg" alt="" />
                                    <h1>This is a title</h1>
                                    <p>Some sample text about the article this hexagon leads to</p>
                                </div>
                            </li>
                            <li class="hex">
                                <div class="hexIn" href="#">
                                    <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/cherry-blossoms-black-and-white-1-paul-ward.jpg" alt="" />
                                    <h1>This is a title</h1>
                                    <p>Some sample text about the article this hexagon leads to</p>
                                </div>
                            </li>
                            <li class="hex">
                                <div class="hexIn" href="#">
                                    <img src="https://ak.picdn.net/shutterstock/videos/7138747/thumb/1.jpg" alt="" />
                                    <h1>This is a title</h1>
                                    <p>Some sample text about the article this hexagon leads to</p>
                                </div>
                            </li>
                            <li class="hex">
                                <div class="hexIn" href="#">
                                    <img src="https://images.fineartamerica.com/images-medium-large/black-and-white-sky-with-building-storm-clouds-photo-poster-print-keith-webber-jr.jpg" alt="" />
                                    <h1>This is a title</h1>
                                    <p>Some sample text about the article this hexagon leads to</p>
                                </div>
                            </li>
                            <li class="hex">
                                <div class="hexIn" href="#">
                                    <img src="https://media.istockphoto.com/photos/black-and-white-colourclose-up-fingers-typing-on-the-computer-picture-id1047951828?k=6&m=1047951828&s=170667a&w=0&h=9SKefXT1mVnxjKYRBRsI4vyYhKmWOmAl_n_OGdC38Ko=" alt="" />
                                    <h1>This is a title</h1>
                                    <p>Some sample text about the article this hexagon leads to</p>
                                </div>
                            </li>
                            <li class="hex">
                                <div class="hexIn" href="#">
                                    <img src="https://evolllution.com/wp-content/uploads/2013/12/Big-T-Technology-chones.jpg" alt="" />
                                    <h1>This is a title</h1>
                                    <p>Some sample text about the article this hexagon leads to</p>
                                </div>
                            </li>
                            <li class="hex">
                                <div class="hexIn" href="#">
                                    <img src="https://evolllution.com/wp-content/uploads/2013/12/Big-T-Technology-chones.jpg" alt="" />
                                    <h1>This is a title</h1>
                                    <p>Some sample text about the article this hexagon leads to</p>
                                </div>
                            </li>
                            <li class="hex">
                                <div class="hexIn" href="#">
                                    <img src="https://ak.picdn.net/shutterstock/videos/7138747/thumb/1.jpg" alt="" />
                                    <h1>This is a title</h1>
                                    <p>Some sample text about the article this hexagon leads to</p>
                                </div>
                            </li>
                            <li class="hex">
                                <div class="hexIn" href="#">
                                    <img src="https://images.fineartamerica.com/images-medium-large/black-and-white-sky-with-building-storm-clouds-photo-poster-print-keith-webber-jr.jpg" alt="" />
                                    <h1>This is a title</h1>
                                    <p>Some sample text about the article this hexagon leads to</p>
                                </div>
                            </li>
                            <li class="hex">
                                <div class="hexIn" href="#">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUKzK4DgFftnLNJE5N8DkGfeCRq8_amqbSYg&usqp=CAU" alt="" />
                                    <h1>This is a title</h1>
                                    <p>Some sample text about the article this hexagon leads to</p>
                                </div>
                            </li>
                            <li class="hex">
                                <div class="hexIn" href="#">
                                    <img src="https://ak.picdn.net/shutterstock/videos/6433316/thumb/4.jpg" alt="" />
                                    <h1>This is a title</h1>
                                    <p>Some sample text about the article this hexagon leads to</p>
                                </div>
                            </li>
                            <li class="hex">
                                <div class="hexIn" href="#">
                                    <img src="https://media.istockphoto.com/photos/black-and-white-colourclose-up-fingers-typing-on-the-computer-picture-id1047951828?k=6&m=1047951828&s=170667a&w=0&h=9SKefXT1mVnxjKYRBRsI4vyYhKmWOmAl_n_OGdC38Ko=" alt="" />
                                    <h1>This is a title</h1>
                                    <p>Some sample text about the article this hexagon leads to</p>
                                </div>
                            </li>
                            <li class="hex">
                                <div class="hexIn" href="#">
                                    <img src="https://images.fineartamerica.com/images-medium-large/black-and-white-sky-with-building-storm-clouds-photo-poster-print-keith-webber-jr.jpg" alt="" />
                                    <h1>This is a title</h1>
                                    <p>Some sample text about the article this hexagon leads to</p>
                                </div>
                            </li>
                            <li class="hex">
                                <div class="hexIn" href="#">
                                    <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/cherry-blossoms-black-and-white-1-paul-ward.jpg" alt="" />
                                    <h1>This is a title</h1>
                                    <p>Some sample text about the article this hexagon leads to</p>
                                </div>
                            </li>
                            <li class="hex">
                                <div class="hexIn" href="#">
                                    <img src="https://ak.picdn.net/shutterstock/videos/6433316/thumb/4.jpg" alt="" />
                                    <h1>This is a title</h1>
                                    <p>Some sample text about the article this hexagon leads to</p>
                                </div>
                            </li>
                            <li class="hex">
                                <div class="hexIn" href="#">
                                    <img src="https://images.fineartamerica.com/images-medium-large/black-and-white-sky-with-building-storm-clouds-photo-poster-print-keith-webber-jr.jpg" alt="" />
                                    <h1>This is a title</h1>
                                    <p>Some sample text about the article this hexagon leads to</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 header-text">
                        <h2>Hello</h2>
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