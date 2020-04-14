import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import orionHealth from '../images/orionHealthLogo.jpg';
import UoACoatOfArms from '../images/resizeUoA.png';

import UncontrolledLottie from './uncontrolledLottie';

class Aboutme extends React.Component{
    constructor(props){
        super(props);
    
        this.toOrion = this.toOrion.bind(this);
        this.toUoA = this.toUoA.bind(this);
    }

    toOrion(){
        var orionLink = "https://orionhealth.com/nz/";
        window.open(orionLink, "_blank");
    }

    toUoA(){
        var uoaLink = "https://www.auckland.ac.nz/en.html"
        window.open(uoaLink, "_blank");
    }

    render(){
        return (
            <div>
                {/* for graphics */}
                <div class="graphics-background-aboutme">
                    <div className = "lotties">
                        <UncontrolledLottie />
                    </div>
                </div>

                {/* for information timeline */}
                <div class="graphicExplained-background-aboutme">
                    <VerticalTimeline>        
                        {/* Current Role - GTA and Lab Dem  */}
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(42, 72, 124)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(42, 72, 124)' }}
                            date={<h3 className = "date-UoA-GTA">March 2020 - present</h3>}
                            iconOnClick = {this.toUoA}
                            iconStyle={{ background: `url(${UoACoatOfArms})`, imageSize:"1vw", color: '#fff', cursor: 'pointer' }}
                            visibilitySensorProps = {{partialVisibility: false, offset: {bottom:80}}}
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
                            contentStyle={{ background: 'rgb(95, 95, 95)', color: '#e06713' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(95, 95, 95)' }}
                            date={<h3 className = "date-OH">November 2019 - February 2020</h3>}
                            iconOnClick = {this.toOrion}
                            iconStyle={{ background: `url(${orionHealth})`, imageSize:"1vw", color: '#fff', cursor: 'pointer' }}
                            visibilitySensorProps = {{partialVisibility: false}}
                            >

                            <h3 className="vertical-timeline-element-title">Data Science Intern</h3>
                            <h4 className="vertical-timeline-element-subtitle">Auckland, New Zealand</h4>
                            <p>
                                <h6 class = "h6-li-aboutme">
                                    <li>Conducted User Interviews</li>
                                    <li>Built a web-app using React</li>
                                    <li>Conducted User Testing with Clinicians and Data Scientists on Developed Product</li>
                                </h6>
                            </p>
                        </VerticalTimelineElement>

                        {/* Research Assistant UoA */}
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(42, 72, 124)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(42, 72, 124)' }}                            
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
                            contentStyle={{ background: 'rgb(42, 72, 124)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(42, 72, 124)' }}                            
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
                            contentStyle={{ background: 'rgb(42, 72, 124)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(42, 72, 124)' }}                            
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
                            contentStyle={{ background: 'rgb(42, 72, 124)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(42, 72, 124)' }}                            
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
                            contentStyle={{ background: 'rgb(42, 72, 124)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(42, 72, 124)' }}                            
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
                </div>
            </div>
        );
    }
}

export default Aboutme;