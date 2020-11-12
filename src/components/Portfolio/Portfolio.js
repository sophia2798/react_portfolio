import React from 'react';
import "./Portfolio.css";
import passwordgenerator from "../../assets/passwordgenerator.gif";
import quiz from "../../assets/quiz.gif";
import covid from "../../assets/covid.gif";
import planner from "../../assets/planner.gif";
import petwork from "../../assets/petwork.gif";

function Portfolio() {
    return (
        <div className="portfolio">
            <h1>PORTFOLIO</h1>
            <hr style={{borderColor:'white'}}/>
            <p id="portfolio-content">
            Explore my past and current projects!
            </p>
            <section className="gifs">
                <div className="gif-row">
                    <div className="indImg row-1">
                        <img src={passwordgenerator} alt="passwordgenerator gif"/>
                        <a href="https://sophia2798.github.io/password_generator/" alt="link to password generator" target="blank"><div class="overlay">
                            <div class="text">Creates a Randomly Generated Password Given User Chosen Criteria</div>
                        </div></a>                   
                    </div>
                    <div className="indImg">
                    <img src={planner} alt="planner gif"/>     
                        <a href="https://sophia2798.github.io/work_planner/" alt="link to work planner" target="blank"><div class="overlay">
                            <div class="text">Work Day Planner That Saves Data to Local Storage</div>
                        </div></a>                   
                    </div>                
                </div>
                <div className="gif-row">
                    <div className="indImg row-1">
                    <img src={petwork} alt="petwork gif"/>
                        <a href="https://secret-meadow-51163.herokuapp.com/" alt="link to petwork page" target="blank"><div class="overlay">
                        <div class="text">Full Stack Application that Allows Owners Find Local Pets for their Pet(s)</div>
                        </div></a>                   
                    </div>
                    <div className="indImg">
                    <img src={covid} alt="covid gif"/>     
                        <a href="https://sophia2798.github.io/covid_stats/" alt="link to covid page" target="blank"><div class="overlay">
                        <div class="text">Displays COVID-19 Case Statistics, Testing Centers, and County Health Department Contact Information</div>
                        </div></a>                   
                    </div>                
                </div>
                <div className="gif-row">
                    <div className="indImg row-1">
                    <img src={quiz} alt="quiz gif"/>    
                        <a href="https://sophia2798.github.io/API_quiz/" alt="link to quiz page" target="blank"><div class="overlay">
                        <div class="text">Quiz With a Timer and the Functionality to Save User's Name and Score</div>
                        </div></a>                   
                    </div>             
                </div>
            </section>
        </div>
    )
}

export default Portfolio
