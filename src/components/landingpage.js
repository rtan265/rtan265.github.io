import React from 'react';
import landingPagePhoto from '../images/landingPagePhoto.jpg';

class Landing extends React.Component{
    render(){
        return (
            
            <div className = "background-landing-page" style={{backgroundImage:`url(${landingPagePhoto})`, backgroundSize:"cover", height: "100%"}}>
                <div className = "banner-text">
                    <h1>Ryan Tan</h1>
                    <h2>Aspiring Software Developer/Engineer | Machine Learning Enthusiast</h2>

                    <hr/>

                    <p>HTML/CSS | JavaScript | Python | C++ | C# | ReactJs | Git</p>

                    <div className="social-links">
                        {/* LinkedIn */}
                        <a href="http://www.linkedin.com/in/rtan18" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>
                        
                        {/* Github */}
                        <a href="http://www.github.com/rtan265" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true" />
                        </a>

                        {/* Medium */}
                        <a href="https://medium.com/@rtan265" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-medium" aria-hidden="true" />
                        </a>
                    
                    </div>
                </div>

                <div className = "banner-text-mobile">

                </div>

            </div>
        )
    }
}

export default Landing;