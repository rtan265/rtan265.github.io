import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Cell, Grid } from 'react-mdl';
import 'react-vertical-timeline-component/style.min.css';

import orionHealth from '../images/orionHealthLogo.jpg';
import UoACoatOfArms from '../images/resizeUoA.png';
import UncontrolledLottie from './uncontrolledLottie';
import AUCS from '../images/AUCS.jpg';
import codeClub from '../images/codeClubAotearoa.jpg';
import thinkPod from '../images/thinkPod.jpg';


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
                            
                        <h3 className="vertical-timeline-element-title-educ">Bachelor of Science (Honours) in Computer Science</h3>
                        <h4 className="vertical-timeline-element-subtitle-educ">University of Auckland, Auckland, New Zealand</h4>
                        <p className = "description-of-papers-taken-hons">
                            <strong>Papers taken:</strong>
                            <Grid className="papers-and-grades">
                                <Cell col={4} className = "A-grade">CS751 - Advanced Topics in Database Systems</Cell>
                                <Cell col={4} className = "A-grade">CS752 - Big Data Management</Cell>
                            </Grid>
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
                        visibilitySensorProps = {{partialVisibility: true}}
                        >
                            
                        <h3 className="vertical-timeline-element-title-educ">Graduate Diploma (Computer Science)</h3>
                        <h4 className="vertical-timeline-element-subtitl-educ" >University of Auckland, Auckland, New Zealand</h4>
                        <p className = "description-of-papers-taken-gdip">
                            <strong>Papers taken:</strong>
                            <Grid className="papers-and-grades">
                                <Cell col={4} className = "A-grade">CS101 - Principles of Programming</Cell>
                                <Cell col={4} className = "A-grade">CS105 - Principles of Computer Science</Cell>
                                <Cell col={4} className = "A-grade">CS210 - Computer Systems I</Cell>
                                <Cell col={4} className = "A-grade">CS220 - Data Structures and Algorithms</Cell>
                                <Cell col={4} className = "A-grade">CS225 - Discrete Structures in Mathematics and Computer Science</Cell>
                                <Cell col={4} className = "A-grade">CS230 - Programming Techniques</Cell>
                                <Cell col={4} className = "A-grade">CS280 - Introduction to Software Development</Cell>
                                <Cell col={4} className = "A-grade">CS320 - Applied Algorithmics</Cell>
                                <Cell col={4} className = "A-grade">CS335 - Functional Programming and Distributed Services</Cell>                                
                                <Cell col={4} className = "A-grade">CS345 - Human-Computer Interaction</Cell>
                                <Cell col={4} className = "A-grade">CS361 - Machine Learning</Cell>
                                <Cell col={4} className = "A-grade">CS373 - Computer Graphics and Image Processing</Cell>
                                <Cell col={4} className = "A-grade">
                                    CS380 - Undergraduate Project in Computer Science. Project Title: <strong>Investigating the Effects of Notifications on Productivity and Stress</strong>
                                </Cell>
                                
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
                        visibilitySensorProps = {{partialVisibility: true}}
                        >
                            
                        <h3 className="vertical-timeline-element-title-educ">Bachelor of Science</h3>
                        <h4 className="vertical-timeline-element-subtitle-educ">University of Otago, Dunedin, New Zealand</h4>
                        <p className = "description-of-papers-taken-gdip">
                            <strong>Papers taken:</strong>
                            <Grid className="papers-and-grades">
                                <Cell col={4} className = "uoo-papers">CELS191 - Cell and Molecular Biology</Cell>
                                <Cell col={4} className = "uoo-papers">CHEM191 - The Chemical Basis of Biology and Human Health</Cell>
                                <Cell col={4} className = "uoo-papers">HUBS191 - Human Biology Systems I</Cell>
                                <Cell col={4} className = "uoo-papers">PHSI191 - Biological Physics</Cell>
                                <Cell col={4} className = "uoo-papers">BIOC192 - Foundations of Biochemistry</Cell>
                                <Cell col={4} className = "uoo-papers">HEAL192 - Foundations of Epidemiology</Cell>
                                <Cell col={4} className = "uoo-papers">HUBS192 - Human Body Systems II</Cell>
                                <Cell col={4} className = "uoo-papers">GENE221 - Molecular and Microbial Genetics</Cell>
                                <Cell col={4} className = "uoo-papers">PSYC111 - Brain and Behavior</Cell>
                                <Cell col={4} className = "uoo-papers">ANAT242 - Neurobiology</Cell>
                                <Cell col={4} className = "uoo-papers">BIOC221 - Molecular Biology</Cell>
                                <Cell col={4} className = "uoo-papers">BITC201 - Bioethics and Life Sciences</Cell>
                                <Cell col={4} className = "uoo-papers">MICR221 - Microbes to Medicine</Cell>
                                <Cell col={4} className = "uoo-papers">PHSL231 - Neurophysiology</Cell>
                                <Cell col={4} className = "uoo-papers">GENE222 - Genes, Chromosomes, and Populations</Cell>
                                <Cell col={4} className = "uoo-papers">GENE223 - Developmental and Applied Genetics</Cell>
                                <Cell col={4} className = "uoo-papers">PSYC211 - Brain and Cognition</Cell>
                                <Cell col={4} className = "uoo-papers">PSYC317 - Biopsychology</Cell>
                                <Cell col={4} className = "uoo-papers">BIOC352 - Advanced Molecular Biology and Bioinformatics</Cell>
                                <Cell col={4} className = "uoo-papers">BITC301 - Bioethics</Cell>
                                <Cell col={4} className = "uoo-papers">PHSL341 - Molecular, Cellular and Integrative Neurophysiology (I)</Cell>
                                <Cell col={4} className = "uoo-papers">ANAT335 - Neurobiology</Cell>
                                <Cell col={4} className = "uoo-papers">GENE313 - Medical Genetics</Cell>
                                <Cell col={4} className = "uoo-papers">GENE314 - Developmental Genetics</Cell>
                                <Cell col={4} className = "uoo-papers">PSYC319 - Comparative Cognition</Cell>


                            </Grid>
                        </p>
                    </VerticalTimelineElement>
                    
                </VerticalTimeline>
            )
        } else {
            // Extra-curricular here
            return(
                <div className = "timeline-extr-grid">
                <Grid className = "timeline-extr-card">
                <CardDeck>
                    {/* AUCS */}
                    <Card>
                        <Card.Img variant="top" src= {AUCS} />
                        <Card.Body>
                        <Card.Title>AUCS - Auckland University Computer Science Society</Card.Title>
                        <Card.Text>
                            Description of my role as a Social Events Coordinator/Hackathon Main Organizer
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                    {/* CodeClub Aotearoa */}
                    <Card>
                        <Card.Img variant="top" src= {codeClub}/>
                        <Card.Body>
                        <Card.Title>Code Club Aotearoa</Card.Title>
                        <Card.Text>
                            Description of my volunteering role at Code Club Aotearoa.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                    {/* ThinkPod Consulting */}
                    <Card>
                        <Card.Img variant="top" src= {thinkPod}/>
                        <Card.Body>
                        <Card.Title>ThinkPod</Card.Title>
                        <Card.Text>
                            Role as a Consultant, and then as a mentor description. 
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    </CardDeck>
                    
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