import React from 'react';
import Button from 'react-bootstrap/Button';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Cell, Grid, Card, CardTitle, CardText, CardActions } from 'react-mdl';
import 'react-vertical-timeline-component/style.min.css';

import orionHealth from '../images/orionHealthLogo.jpg';
import UoACoatOfArms from '../images/resizeUoA.png';
import UncontrolledLottie from './uncontrolledLottie';

class Timeline extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            informationToShow: "extr"
        }
    
        this.toOrion = this.toOrion.bind(this);
        this.toUoA = this.toUoA.bind(this);
        this.toUoO = this.toUoO.bind(this);
        this.changeInformation = this.changeInformation.bind(this);
        this.toggleInformation = this.toggleInformation.bind(this);
    }

    changeInformation(infoNeeded){
        if (infoNeeded === "work"){
            this.setState({
                informationToShow: "work"
            }, () => console.log(this.state.informationToShow));
        } else if (infoNeeded === "educ"){
            this.setState({
                informationToShow: "educ"
            }, () => console.log(this.state.informationToShow));
        } else {
            this.setState({
                informationToShow: "extr"
            }, () => console.log(this.state.informationToShow));
        }
    }

    toOrion(){
        var orionLink = "https://orionhealth.com/nz/";
        window.open(orionLink, "_blank");
    }

    toUoA(){
        var uoaLink = "https://www.auckland.ac.nz/en.html"
        window.open(uoaLink, "_blank");
    }

    toUoO(){
        var uooLink = "https://www.otago.ac.nz/"
        window.open(uooLink, "_blank");
    }

    toggleInformation(){
        // Work information here
        if (this.state.informationToShow === "work"){
            return (
                <VerticalTimeline>        
                    {/* Current Role - GTA and Lab Dem  */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#687864', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #687864' }}
                        date={<h3 className = "date-UoA-GTA">March 2020 - present</h3>}
                        iconOnClick = {this.toUoA}
                        iconStyle={{ background: `url(${UoACoatOfArms})`, imageSize:"1vw", color: '#fff', cursor: 'pointer' }}
                        visibilitySensorProps = {{partialVisibility: false, onChange: this.onChange}}
                        >
                            
                        <h3 className="vertical-timeline-element-title">Graduate Teaching Assistant</h3>
                        <h4 className="vertical-timeline-element-subtitle">Auckland, New Zealand</h4>
                        <p>
                            Information here
                        </p>
                    </VerticalTimelineElement>

                    {/* Orion Health - Data Scientist Intern */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#687864', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #687864' }}
                        date={<h3 className = "date-UoA-GTA">November 2019 - February 2020</h3>}
                        iconOnClick = {this.toOrion}
                        iconStyle={{ background: `url(${orionHealth})`, imageSize:"1vw", color: '#fff', cursor: 'pointer' }}
                        visibilitySensorProps = {{partialVisibility: false}}
                        >

                        <h3 className="vertical-timeline-element-title">Data Science Intern</h3>
                        <h4 className="vertical-timeline-element-subtitle">Auckland, New Zealand</h4>
                        <p>
                            <h6 class = "orion-health-description-aboutme">
                                <li>Conducted User Interviews</li>
                                <li>Built a web-app using React</li>
                                <li>Conducted User Testing with Clinicians and Data Scientists on Developed Product</li>
                            </h6>
                        </p>
                    </VerticalTimelineElement>

                    {/* Research Assistant UoA */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#687864', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #687864' }}                            
                        date={<h3 className = "date-UoA-GTA">February 2019 - November 2019</h3>}
                        iconOnClick = {this.toUoA}
                        iconStyle={{ background: `url(${UoACoatOfArms})`, imageSize:"1vw", color: '#fff', cursor: 'pointer' }}
                        visibilitySensorProps = {{partialVisibility: false}}
                        >
                            
                        <h3 className="vertical-timeline-element-title">Research Assistant</h3>
                        <h4 className="vertical-timeline-element-subtitle">Auckland, New Zealand</h4>
                        <p>
                        Description of role (RA)
                        </p>
                    </VerticalTimelineElement>
                    
                    {/* TA - compsci130 */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#687864', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #687864' }}                             
                        date={<h3 className = "date-UoA-GTA">February 2019 - June 2019</h3>}
                        iconOnClick = {this.toUoA}
                        iconStyle={{ background: `url(${UoACoatOfArms})`, imageSize:"1vw", color: '#fff', cursor: 'pointer' }}
                        visibilitySensorProps = {{partialVisibility: false}}
                        >
                            
                        <h3 className="vertical-timeline-element-title">Undergraduate Teaching Assistant</h3>
                        <h4 className="vertical-timeline-element-subtitle">Auckland, New Zealand</h4>
                        <p>
                        Description of role (TA)
                        </p>
                    </VerticalTimelineElement>

                    {/* Summer Resaerch Student */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#687864', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #687864' }}                           
                        date={<h3 className = "date-UoA-GTA">November 2018 - February 2019</h3>}
                        iconOnClick = {this.toUoA}
                        iconStyle={{ background: `url(${UoACoatOfArms})`, imageSize:"1vw", color: '#fff', cursor: 'pointer' }}
                        visibilitySensorProps = {{partialVisibility: false}}
                        >
                            
                        <h3 className="vertical-timeline-element-title">Summer Research Student</h3>
                        <h4 className="vertical-timeline-element-subtitle">Auckland, New Zealand</h4>
                        <p>
                        Description of role (SRS)
                        </p>
                    </VerticalTimelineElement>


                    {/* Research Assistant */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#687864', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #687864' }}                            
                        date={<h3 className = "date-UoA-GTA">May 2018 - November 2018</h3>}
                        iconOnClick = {this.toUoA}
                        iconStyle={{ background: `url(${UoACoatOfArms})`, imageSize:"1vw", color: '#fff', cursor: 'pointer' }}
                        visibilitySensorProps = {{partialVisibility: false}}
                        >
                            
                        <h3 className="vertical-timeline-element-title">Research Assistant</h3>
                        <h4 className="vertical-timeline-element-subtitle">Auckland, New Zealand</h4>
                        <p>
                        Description of first year RA (SRS)
                        </p>
                    </VerticalTimelineElement>

                    {/* UoO Residential Assistant */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#687864', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #687864' }}                          
                        date={<h3 className = "date-UoA-GTA">February 2016 - November 2017</h3>}
                        iconOnClick = {this.toUoA}
                        iconStyle={{ background: `url(${UoACoatOfArms})`, imageSize:"1vw", color: '#fff', cursor: 'pointer' }}
                        visibilitySensorProps = {{partialVisibility: false}}
                        >
                            
                        <h3 className="vertical-timeline-element-title">Residential Assistant</h3>
                        <h4 className="vertical-timeline-element-subtitle">Dunedin, New Zealand</h4>
                        <p>
                        Description of job for residential assistant.
                        </p>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            )
        } else if (this.state.informationToShow === "educ"){
            // Education Information here:
            return(
                <VerticalTimeline layout = '1-column'>
                    {/* BSci Hons */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--educ"
                        contentStyle={{ background: '#687864', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #687864' }}     
                        iconStyle = {{background:'#F7F9FB'}}                                     
                        date={<h3 className = "date-UoA-BSCH">March 2020 - November 2021 (Projected)</h3>}
                        iconOnClick = {this.toUoA}
                        // iconStyle={{ background: `url(${UoACoatOfArms})`, imageSize:"1vw", color: '#fff', cursor: 'pointer' }}
                        visibilitySensorProps = {{partialVisibility: false}}
                        >
                            
                        <h3 className="vertical-timeline-element-title-educ">Bachelor of Science (Honours)</h3>
                        <h4 className="vertical-timeline-element-subtitle-educ">University of Auckland, Auckland, New Zealand</h4>
                        <p className = "description-of-papers-taken-hons">
                            Papers taken:
                        </p>
                        
                    </VerticalTimelineElement>

                    {/* Graduate Diploma */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--educ"
                        contentStyle={{ background: '#687864', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #687864' }}  
                        iconStyle = {{background: '#F7F9FB'}}                                     
                        date={<h3 className = "date-UoA-BSCH">January 2018 - November 2019</h3>}
                        iconOnClick = {this.toUoA}
                        // iconStyle={{ background: `url(${UoACoatOfArms})`, imageSize:"1vw", color: '#fff', cursor: 'pointer' }}
                        visibilitySensorProps = {{partialVisibility: false}}
                        >
                            
                        <h3 className="vertical-timeline-element-title-educ">Graduate Diploma (Computer Science)</h3>
                        <h4 className="vertical-timeline-element-subtitl-educ" >University of Auckland, Auckland, New Zealand</h4>
                        <p className = "description-of-papers-taken-gdip">
                            <strong>Papers taken:</strong>
                            <Grid className="papers-and-grades">
                                <Cell col={4} className = "A-grade">CS101 - Principles of Programming</Cell>
                                <Cell col={4} className = "A-grade">CS105 - </Cell>
                                <Cell col={4} className = "A-grade">CS210 - </Cell>
                                <Cell col={4} className = "A-grade">CS210 - </Cell>
                                <Cell col={4} className = "A-grade">CS210 - </Cell>
                                <Cell col={4} className = "A-grade">CS210 - </Cell>
                                <Cell col={4} className = "A-grade">CS210 - </Cell>
                                <Cell col={4} className = "A-grade">CS210 - </Cell>
                                <Cell col={4} className = "A-grade">CS210 - </Cell>                                
                            </Grid>
                        </p>
                    </VerticalTimelineElement>

                    {/* BSc - Neuroscience and Genetics */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--educ"
                        contentStyle={{ background: '#687864', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #687864' }}                                             
                        iconStyle = {{background: '#F7F9FB'}}                                     
                        date={<h3 className = "date-UoA-BSCH">February 2014 - November 2017</h3>}
                        iconOnClick = {this.toUoA}
                        // iconStyle={{ background: `url(${UoACoatOfArms})`, imageSize:"1vw", color: '#fff', cursor: 'pointer' }}
                        visibilitySensorProps = {{partialVisibility: false}}
                        >
                            
                        <h3 className="vertical-timeline-element-title-educ">Bachelor of Science</h3>
                        <h4 className="vertical-timeline-element-subtitle-educ">University of Otago, Dunedin, New Zealand</h4>
                    </VerticalTimelineElement>
                    
                </VerticalTimeline>
            )
        } else {
            // Extra-curricular here
            return(
                <div className = "timeline-extr-grid">
                <Grid className = "timeline-extr-card">
                    
                </Grid>
                </div>
            )
        }
    }


    render(){
        return (
            <div>
                {/* for graphics */}
                <div className="graphics-background-aboutme">
                    <Grid>
                        <Cell col = {12}>
                        <div className = "buttons-aboutme">
                        <Button onClick = {() => this.changeInformation("work")}>Work Experience</Button>
                        <Button onClick = {() => this.changeInformation("educ")}>Education</Button>
                        <Button onClick = {() => this.changeInformation("extr")}>Extra-curicular</Button>
                        </div>
                        </Cell>
                    </Grid>
                    <div className = "lotties">
                        <UncontrolledLottie />
                    </div>
                </div>

                {/* for information timeline */}
                <div class="graphicExplained-background-aboutme">
                    {this.toggleInformation()}
                </div>
            </div>
        );
    }
}

export default Timeline;