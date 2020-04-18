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
                        As a newcomer in computer science and programming, I try to learn about the domain as much as I can to make up for lost time. The following quote inspired me to learn, grow and fail quickly - "It's hard to achieve greatness by constantly looking back. It's constant forward hyper momentum" - Robert Herjavec.
                        <p></p>
                        <p>Hi! I'm Ryan Tan and thank you for visiting my LinkedIn page. I'm currently a student studying at the University of Auckland, and I'm in my penultimate year, working towards my Bachelor of Science (Hons) in Computer Science. I am an aspiring Software Engineer/Developer, that enjoys the problem solving, collaboration and critical thinking aspect of building software. Ever since writing my first line in Python, and getting it to print what my lecturer told me to, I've been fascinated by the boundaries of what computers/software can do. I then spent the last two years learning about how humans interact with software, how computers provide an opportunity to help improve our daily lives, and the potential harms of bad software design.</p>
                        <p></p>
                        <p>Outside programming, I'm currently writing on Medium, and I aim to write guides, articles about new technologies and also my personal experiences. I'd love the opportunity to collaborate with others in writing guides, so if you have a topic you'd like to work on together with me, send me an email! Link to Medium: https://medium.com/@rtan265.</p>
                        <p></p>
                        <p>My current goal is seeking industry experience. I am actively searching for a software engineering internship role for this upcoming summer (2020/2021) to showcase the skills I've learnt over the last two years. Please get in touch with me at rtan265@gmail.com. I look forward to hearing from you!</p>
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