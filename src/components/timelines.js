import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Cell, Grid } from 'react-mdl';
import 'react-vertical-timeline-component/style.min.css';

import orionHealth from '../images/orionHealthLogo.jpg';
import UoACoatOfArms from '../images/resizeUoA.png';
import UoO from '../images/hayward.png';
import UncontrolledLottie from './uncontrolledLottie';
import AUCS from '../images/AUCS.jpg';
import codeClub from '../images/codeClubAotearoa.jpg';
import thinkPod from '../images/thinkPod.jpg';


class Timeline extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            informationToShow: "work"
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
                        visibilitySensorProps = {{partialVisibility: true, onChange: this.onChange}}
                        >
                            
                        <h3 className="vertical-timeline-element-title">Graduate Teaching Assistant</h3>
                        <h4 className="vertical-timeline-element-subtitle">Auckland, New Zealand</h4>
                        <p className = "work-descriptions">
                            <h6>Currently the tutor for the CS345 (Human-Computer Interaction) class. Lead tutorial discussions, and taught certain concepts in more detail. Created tutorial videos to adapt to changes in content delivery.
                            Topics covered (to-date):</h6>
                            <li>Design Walkthroughs</li>
                            <li>Contextual Inquiry</li>
                            <li>Heuristic Evaluations</li>
                            <li>Brainstorming and Problem Framing</li>
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
                        visibilitySensorProps = {{partialVisibility: true}}
                        >

                        <h3 className="vertical-timeline-element-title">Data Science Intern</h3>
                        <h4 className="vertical-timeline-element-subtitle">Auckland, New Zealand</h4>
                        <p className = "work-descriptions">
                            <h6>Over the 2019/2020 summer, I had the opportunity to intern at Orion Health. My project was to develop a proof-of-concept data annotation tool for clinicians. My duties included:</h6>
                            <li>Conducting user interviews with clinicians and data scientists to elicit preferences for the tool.</li>
                            <li>Building a proof-of-concept web application using ReactJs and source control using Git.</li>
                            <li>Conducting usability tests with data scientists, a clinician and UX researcher to get feedback, and prepare feedback for teams to further develop this project.</li>
                            <li>Writing up a report consisting of literature reviews, methods used, results, and conceptualized several solutions to issues brought up during user interviews.</li>
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
                        visibilitySensorProps = {{partialVisibility: true}}
                        >
                            
                        <h3 className="vertical-timeline-element-title">Research Assistant</h3>
                        <h4 className="vertical-timeline-element-subtitle">Auckland, New Zealand</h4>
                        <p className = "work-descriptions">
                            <h6>During the academic year, I was lucky enough to be given an opportunity to conduct research under the supervision of Dr Danielle Lottridge. Our research looked at how notifications affected the productivity and stress levels of office workers. As part of this research, my duties included:</h6>
                                <li>Conceptualizing the study, and experiment to be conducted with the research project.</li>
                                <li>Building a desktop application using C# and used Git as version control. Incorporated biosensors with the developed application to record GSR/SCR and eye movement data.</li>
                                <li>Recruiting participants and conducting experiments to record data for the project.</li>
                                <li>Preparing the data collected for a machine learning researcher.</li>
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
                        visibilitySensorProps = {{partialVisibility: true}}
                        >
                            
                        <h3 className="vertical-timeline-element-title">Undergraduate Teaching Assistant</h3>
                        <h4 className="vertical-timeline-element-subtitle">Auckland, New Zealand</h4>
                        <p className = "work-descriptions">
                            <h6>In Semester One 2019, I had the opportunity to tutor CS130 - Software Fundamentals. The course was taught in Python, with particular emphasis on:</h6>
                                <li>List Comprehensions</li>
                                <li>Testing</li>
                                <li>Recursion</li>
                                <li>Object-Oriented Programming</li>
                                <li>Classes</li>
                                <li>Basic Data Structures and Algorithms</li>
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
                        visibilitySensorProps = {{partialVisibility: true}}
                        >
                            
                        <h3 className="vertical-timeline-element-title">Summer Research Student</h3>
                        <h4 className="vertical-timeline-element-subtitle">Auckland, New Zealand</h4>
                        <p className = "work-descriptions">
                            <h6>During the summer, I was given a studentship position to conduct research for a new project. For this project, my roles included:</h6>
                                <li>Conceptulizing ideas for data collection.</li>
                                <li>Conducting literature reviews that included algorithms to detect stress from skin conductance, and using different psycho-physiological sensors to measure stress.</li>
                                <li>Extracting GSR (Galvanic Skin Response) and SCR (Skin Conductance Responses) from other studies using MATLAB scripts written by other researchers.</li>
                                <li>Preparing materials for data collection for this project.</li>
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
                        visibilitySensorProps = {{partialVisibility: true}}
                        >
                            
                        <h3 className="vertical-timeline-element-title">Research Assistant</h3>
                        <h4 className="vertical-timeline-element-subtitle">Auckland, New Zealand</h4>
                        <p className = "work-descriptions">
                            <h6>In my first year of studying computer science, I volunteered to help a HCI lecturer (Dr Danielle Lottridge) in organizing experiments for students enrolled in the COMPSCI705/SOFTENG702 paper. In addition to this, I took part in learning about one of the studies that Dr Lottridge was organizing, and also ran experiments on behalf of the students who designed that study. My roles included:</h6>
                                <li>Organizing sessions for participants to participate in the multitasking study.</li>
                                <li>Followed up with participants that were missing out on some data sets for the study.</li>
                                <li>Solved issues that came up during the experiment.</li>
                        </p>
                    </VerticalTimelineElement>

                    {/* UoO Residential Assistant */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#687864', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #687864' }}                          
                        date={<h3 className = "date-UoA-GTA">February 2016 - November 2017</h3>}
                        iconOnClick = {this.toUoA}
                        iconStyle={{ background: `url(${UoO})`, imageSize:"1vw", color: '#fff', cursor: 'pointer' }}
                        visibilitySensorProps = {{partialVisibility: true}}
                        >
                            
                        <h3 className="vertical-timeline-element-title">Residential Assistant</h3>
                        <h4 className="vertical-timeline-element-subtitle">Dunedin, New Zealand</h4>
                        <p className = "work-descriptions">
                            <h6>In my last two years at the University of Otago, I worked as a Residential Assistant at one of the best colleges (Hayward College) in Otago. I worked in a two teams of 9 residential assistants, with whom some are still my closest friends today. These two years were the most enjoyable to me whilst I was in Otago, as this role gave me the opportunity to lead, and inspire other first year students. As a residential assistant, my roles included:</h6>
                                <li>Providing quality welfare and pastoral care to a group of 153 ethnically diverse first year students.</li>
                                <li>Organizing events such as the annual Ski Trip to Queenstown and floor events.</li>
                                <li>Addressed student needs by solving conflicts as a mediator and providing counsel on various personal and academic issues.</li>
                                <li>Liaison with other colleges and University staff to organize sport and art events for students at the college.</li>                        
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
                        visibilitySensorProps = {{partialVisibility: true}}
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
                        <Card.Title>Social and Events Coordinator/Hackathon Organizer (AUCS)</Card.Title>
                        <Card.Text>
                            <p className = "extra-descriptions">
                            Organized events as part of AUCS. I was part of the team that ran social and competitive events for computer science students at the University of Auckland. In my second year, I was in charge of organizing a Hackathon on behalf of AUCS. Some key highlights:
                            <li>Raised $500 in sponsorship for the Hackathon event.</li>
                            <li>Organized judges, and location for the Hackathon event.</li>
                            <li>Provided competitive, social and informative events for students.</li>
                            </p>
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">July 2018 - November 2019</small>
                        </Card.Footer>
                    </Card>

                    {/* CodeClub Aotearoa */}
                    <Card>
                        <Card.Img variant="top" src= {codeClub}/>
                        <Card.Body>
                        <Card.Title>Volunteer (Code Club Aotearoa)</Card.Title>
                        <Card.Text>
                            <p className = "extra-descriptions">
                            Every saturday, I would volunteer around 1.5 hours of my time to help teach young children (between ages 5-15) how to code in 
                            the Pakuranga/Panmure local libraries. Classes usually range from 15-20 children, and had a strong focus on design (specifically Scratch, CSS, and JavaScript). 
                            To keep the children interested in coding with Python and JavaScript, I needed to come up with innovative ways to teach, to keep them interested in coding. 
                            </p>
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">March 2018 - December 2019</small>
                        </Card.Footer>
                    </Card>

                    {/* ThinkPod Consulting */}
                    <Card>
                        <Card.Img variant="top" src= {thinkPod}/>
                        <Card.Body>
                        <Card.Title>Consultant and Mentor (ThinkPod)</Card.Title>
                        <Card.Text>
                            <p className = "extra-descriptions">
                            As a Consultant:
                            <li>Conducted interviews with our client to understand their issues.</li>
                            <li>Conducted research and came up with solutions for a client with a team of 6 other consultants.</li>
                            <li>Analyzed client issues and produced practical solutions via oral presentation and a written report.</li>
                            <li>Worked under time pressure (11 academic weeks + University breaks).</li>
                            <hr />
                            As a Mentor:
                            <li>Mentored a group of consultants for Synergy (as part of their ThinkPod program).</li>
                            <li>Ensured that work is delivered on time according to deadlines.</li>
                            <li>Provided constructive criticism and support on the team's solutions and issues.</li>
                            <li>Provided feedback on solutions presented by other teams.</li>
                            </p>
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">March 2018 - November 2018</small>
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