import React from 'react';
import "./About.css";
import portrait from "../../assets/portrait.JPG";

function About() {
    return (
        <div className="About">
            <h1>ABOUT</h1>
            <hr style={{borderColor:'white'}}/>
            <p id="about-me">
            <h2>BELIEFS</h2>
            Every great progression, movement, or product begins with a dream. As the world becomes more interconnected, technology becomes more powerful, and tools become more accessible, this generation inches closer and closer to turning its dreams into a reality. While I can be an implementer, I strive to continue to open my mind to the possibilities of the future. In the modern age, the ability to express one's thoughts, ideas, or products though technological platforms has become crucial. I am passionate about helping people and organizations pursue such an endeavor. I particularly enjoy the blend of technical and creative skill that is required, as well as the dyanmic aspect of the field, which always pushes me to learn new things and approach problems in new ways.
            <br/><br/>
            <h2>BIO</h2>
            I was born in Bellevue, WA on April 27, 1998. I have one older brother named Peter and two dogs named Susha and Sienna. I moved to South Korea for a year when I was 7 years old, but otherwise have lived in Washington for my whole life. I went to college at the University of Washington and graduated with a degree in Applied Physics in June of 2020! I am always open to learning new things and meeting new people as I believe that creating diverse networks can provide a better means to approach the world's problems.
            I am a music lover and have yet to come across a style of music I don't like. I enjoy playing the piano, singing, and going to concerts and music festivals. I also love food and reading so recommendations in both areas are always welcome. Some of my favorite books include the Dune Series, Fahrenheit 451, Flowers for Algernon, Jane Eyre, and Hitchikers Guide to the Galaxy.
            </p>
        </div>
    )
}

export default About