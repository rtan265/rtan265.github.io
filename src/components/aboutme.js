import React from 'react';

import { Grid, Cell } from 'react-mdl';

import BitmojiHello from '../images/bitmojiHi.png';
import BitmojiWork from '../images/bitmojiWorking.png';
import Pdf from '../CVs/ryan-google-cv.pdf';

import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial } from 'react-awesome-button';


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
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <div className = "aboutme-download-cv">
                            <AwesomeButton type="primary" onPress = {this.handleClick}>Click to Download my CV</AwesomeButton>
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