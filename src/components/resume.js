import React from 'react';
import BitmojiConstruction from '../images/bitmojiConstruction.png';

class Resume extends React.Component{
    render(){
        return (
            <div className ="in-construction">
                <p className = "in-text">Page under construction, check back soon!</p>
                <img src = {BitmojiConstruction} className = "bitmoji-construction-projects"/>
            </div>
        )
    }
}

export default Resume;