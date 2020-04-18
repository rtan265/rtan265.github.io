import React from 'react';

import { Grid, Cell } from 'react-mdl';

import BitmojiHello from '../images/bitmojiHi.png';
import BitmojiWork from '../images/bitmojiWorking.png';
import Pdf from '../CVs/ryan-google-cv.pdf';

import { AwesomeButton } from 'react-awesome-button';


class AboutMe extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        console.log("clicked");
        window.open(Pdf);
        console.log("return");
        
    }

    render(){
        return(
            <div className = "aboutme-grid-div">
                <Grid className = "aboutme-grid">
                    <Cell col={4}>
                        <img className = "bitmoji-hello" src= {BitmojiHello} alt = "Bitmoji Saying Hello"/>
                        <p></p>
                        
                    </Cell>
                    <Cell col={4}>

                        <h2 className = "aboutme-text-header"><strong>A little about me...</strong></h2>

                        <p className = "aboutme-text-body-right">

                        <p></p>
                        <p>Before joining the tech sector, I found myself not enjoying health science. A friend recommended studying Computer Science (CS), which at the time, I wasn't sure about. In 2018, I decided to bite the bullet and dived into CS at the University of Auckland. To this day, I have never regretted making that decision.
                        <p></p>
                        <p>Hi! I'm Ryan Tan and thank you for visiting my website. I spent the Easter break building this website, and after spending countless of hours styling, thinking about what content to put up and learning how to deploy to my own custom domain, I can finally say that I've managed to finish my list of must-haves. 
                        I'm still currently building this website, so if you have any interesting ideas on making my website feel a little more unique, please shoot me a message! You can find my contact details on my resume or linkedin, as they are not shared here due to scrape bots. </p>
                        <p>Currently I'm a student studying at the University of Auckland. I'm in my penultimate year, working towards my Bachelor of Science (Hons) in Computer Science. I aspire to be a Software Engineer/Developer as I enjoy problem solving, and collaborating with others to build fun projects. 
                        Ever since writing my first line in Python, and getting it to print what my lecturer told me to, I've been fascinated by the boundaries of what computers/software can do. 
                        I then spent the last two years learning about how humans interact with software, how computers provide an opportunity to help improve our daily lives, and the potential harms of bad software design.</p>
                        <p></p>
                        Outside programming, I aim to write guides, and articles about new technologies and my personal experiences on Medium.com. I would love to collaborate with others to work on a topic, so please contact me if you'd like to do so! Here's the link to Medium: https://medium.com/@rtan265.</p>
                        <p></p>
                        <p>My current goal is seeking industry experience. I am actively searching for a software engineering internship role for this upcoming summer (2020/2021) to showcase the skills I've learnt over the last two years. Please get in touch with me if you have any available opportunities! I'd love to discuss them with you in person. I look forward to hearing from you!</p>
                        </p>

                        <div className = "aboutme-download-cv">
                            <AwesomeButton type="primary" disabled={true} onPress = {this.handleClick}>Click to Download my CV</AwesomeButton>
                        </div>

                    </Cell>
                    <Cell col={4}>

                        <img className = "bitmoji-work" src = {BitmojiWork} alt = "Bitmoji Working"/>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }   
}

export default AboutMe;