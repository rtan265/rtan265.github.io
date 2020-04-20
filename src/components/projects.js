import React from 'react';
import { Tabs, Tab, Card, CardTitle, CardActions, Button, CardMenu, CardText } from 'react-mdl';
import { Container, Col, Row } from 'react-bootstrap';


class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toGithubCheesenCracker(){
        var link = "https://github.com/rtan265/cheesencrackers";
        window.open(link, "_blank");
    }

    toGithubGroupWorkHCI(){
        var link = "https://github.com/rtan265/345A3";
        window.open(link, "_blank");
    }

    toGithubPersonalWebsite(){
        var link = "https://github.com/rtan265/rtan265.github.io";
        window.open(link, "_blank");
    }

    toggleCategories() {
        if (this.state.activeTab === 0){
            return(
                <div className="projects-grid-academic">
                    <Container fluid>
                        <Row>

                        {/* Naive Bayes Assignment */}
                        <Col xs={12} md = {6} lg={3} style={{marginBottom: '4em'}}>
                            <Card shadow={5} style ={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle className = "Naive-Bayes" style={{color: '#000', height: '176px', fontSize: '15px'}}>
                                    Naive Bayes Classifier</CardTitle>
                                <CardText>
                                    <hr/>
                                    As part of the machine learning class that I took in 2019, we were tasked to build a Naive Bayes classifier using Python in Jupyter.
                                    This was a challenging assignment, but it was worth losing a couple of sleepness nights to finally get it working!
                                </CardText>
                                <CardActions border>
                                </CardActions>
                            </Card>
                        </Col>

                        {/* // react project #2 */}
                        <Col xs={12} md = {6} lg={3} style={{marginBottom: '4em'}}>
                            <Card shadow={5} style ={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle className = "group-work-hci" style={{color: '#000', height: '176px'}}>
                                    Group Work Design</CardTitle>
                                <CardText>
                                    <hr/>
                                    As part of the human-computer interaction class that I took in 2019, we were tasked to build a group work system that helps students work together. 
                                    The project had a heavy focus on the design and layout of the website, and we had to build the project using only HTML, CSS and JavaScript. 
                                    <p>
                                        My Contributions in the project included:
                                        <li>Managing the overall team.</li>
                                        <li>Research on best design practices and presenting results to the team.</li>
                                        <li>Building the home page.</li>
                                    </p>
                                </CardText>
                                <CardActions border>
                                    <Button colored onClick = {this.toGithubGroupWorkHCI.bind(this)}>Github</Button>
                                </CardActions>
                                <CardMenu style={{color: '#000'}}>
                                    
                                </CardMenu>
                            </Card>
                        </Col>

                        {/* // react project #3 */}
                        <Col xs={12} md = {6} lg={3} style={{marginBottom: '4em'}}>
                            <Card shadow={5} style ={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle className = "projects-trace-file" style={{color: '#000', height: '176px'}}>
                                    Viewing Trace Files</CardTitle>
                                <CardText>
                                    <hr/>
                                    In this assignment, I was tasked with building an application that could read trace files, and generate a graph that correlates the amount of data being sent/received. This project was developed in Java in 2018. 
                                    The main problems I had in this assignment was playing around with the numbers that will be used to generate the graph. It was extremely hard to keep track of what variables stored what numbers, and when to use the numbers to resize the graph.
                                    In addition to this, deciding on where to put what function and class was also a mission, as I wasn't sure on what functions will go in what class. It was all worth it in the end, after being able to see what was generated in my application. 
                                </CardText>
                                <CardActions border>
                                    <Button colored disabled = {true}>Github</Button>
                                </CardActions>
                                <CardMenu style={{color: '#000'}}>
                                    
                                </CardMenu>
                            </Card>
                        </Col>

                        {/* // react project #4 */}
                        <Col xs={12} md = {6} lg={3} style={{marginBottom: '4em'}}>
                            <Card shadow={5} style ={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle className = "projects-moving-shapes" style={{color: '#000', height: '176px'}}>
                                    Moving Shapes</CardTitle>
                                <CardText>
                                    <hr/>
                                    In this assignment, I was tasked with building an application that could generate shapes when clicking on a random spot in the application. This project was developed in Java in 2018. 
                                    I had a lot of problems when building this project, mainly because of my lack of programming experience. It was a lot of fun however, once the project was completed, and being able to see what the application can do. 
                                </CardText>
                                <CardActions border>
                                    <Button colored disabled = {true}>Github</Button>
                                </CardActions>
                                <CardMenu style={{color: '#000'}}>
                                    
                                </CardMenu>
                            </Card>
                        </Col>
                        </Row>

                    </Container>
                </div>
            )
        } else if (this.state.activeTab === 1){
            return(
                <div className = "projects-grid-work">
                    <Container fluid>
                        <Row>

                        {/* Orion Health */}
                        <Col xs={12} md = {6} lg={6} style={{marginBottom: '4em', justifyContent: "center"}}>
                            <Card shadow={5} style ={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle className = "projects-dat" style={{color: '#000', height: '176px'}}>
                                    Data Annotation Tool</CardTitle>
                                <CardText>
                                    <hr/>
                                    This research project was supported by funding from the Precision Driven Health research partnership and carried out at Orion Heath.
                                    I built this application over 3 weeks, using ReactJs.
                                    <p>
                                        <p></p>
                                        Over the 2019/2020 summer, I interned at Orion Health as a data science intern. During the internship, I was tasked with building a proof-of-concept data annotation tool. 
                                        Most of the work focused on the research aspect, where I conducted user interviews with clinicians and data scientists to elicit preferences for the tool, 
                                        co-designed the tool with the end user and a UX researcher, and conceptualized several solutions to solve issues that came up during user interviews.
                                    </p>
                                    <p>
                                        Lessons learnt:
                                        <li>Don't be afraid to ask for help when you're stuck.</li>
                                        <li>Fail fast and fail hard.</li>
                                        <li>Don't ask potential users what they want in software. Co-design with them to find out their preferences.</li>
                                    </p>
                                </CardText>
                                <CardActions border>
                                </CardActions>
                            </Card>
                        </Col>

                        {/* Ticket Classifier Project */}
                        <Col xs={12} md = {6} lg={6} style={{marginBottom: '4em'}}>
                            <Card shadow={5} style ={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle className = "projects-tc" style={{color: '#000', height: '176px'}}>
                                    Ticket Classifier</CardTitle>
                                <CardText>
                                    <hr/>
                                    I built a desktop application using C#, and used Git as version control. My application generated random tickets and notifications, and was also used to gather data from participants.
                                    In addition to this, the application also incorporated APIs from other software (which was implemented by a colleague), that would mark when the events occurred on the data. 
                                    <p>
                                        <p></p>
                                        Lessons learnt:
                                        <li>Have meaningful variable names ("Hey Ryan, what does Image31 and Image32 mean?").</li>
                                        <li>Have meaningful commit names ("small change in main.cs" make absolutely no sense).</li>
                                        <li>Do not use absolute positions!!!!!! Just because it works on your machine, doesn't mean it will work on others.</li>
                                    </p>
                                </CardText>
                                <CardActions border>
                                </CardActions>
                                <CardMenu style={{color: '#000'}}>
                                    
                                </CardMenu>
                            </Card>
                        </Col>
                        </Row>

                    </Container>
                        
                </div>
            )
        } else if (this.state.activeTab === 2){
            return(
                <div className="projects-grid-personal-hackathon">
                    <Container fluid>
                        <Row>

                        {/* Personal Website */}
                        <Col xs={12} md = {6} lg={4} style={{marginBottom: '4em'}}>
                            <Card shadow={5} style ={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle className = "projects-personal-website" style={{color: '#000', height: '176px'}}>
                                    Personal Website</CardTitle>
                                <CardText>
                                    <hr/>
                                    My personal website! I built my website over a week during the Easter break. I wanted to build upon my knowledge of ReactJs, so I thought, the best way to do so will be to build my own personal website! I'm super happy with what I was able to achieve over a week, so I'm happy to share this with you all!
                                    <p>
                                        <p></p>
                                        Lessons learnt:
                                        <li>Don't use components that have been deprecated (i.e. react-mdl).</li>
                                        <li>Who knew deploying on Github with React would be a mission and a half? </li>
                                        <li>Learning upon lessons from class: Using Trello to prioritize what needs to be done made my development job a lot easier.</li>
                                    </p>
                                </CardText>
                                <CardActions border>
                                    <Button colored onClick={this.toGithubPersonalWebsite.bind(this)}>Github</Button>
                                </CardActions>
                            </Card>
                        </Col>

                        {/* DEVS hackathon */}
                        <Col xs={12} md = {6} lg={4} style={{marginBottom: '4em'}}>
                            <Card shadow={5} style ={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle className = "projects-hackathon-scammr" style={{color: '#000', height: '176px'}}>
                                    Scammr
                                </CardTitle>
                                <CardText>
                                    <hr/>
                                    In July last year, I competed in the DEVS Hackathon with 3 other friends. We decided to make an Android application that can track scam calls in real time. Our ultimate goal was too ambitious, however, we did have fun as a group building the project. 
                                    <p>
                                        My contributions to this project are: 
                                        <li>Managing the overall project.</li>
                                        <li>Developing the application to send data generated to Microsoft Azure, used sentiment analysis on data.</li>
                                        <li>Presenting the ideas to a panel and peers.</li>
                                    </p>
                                </CardText>
                                <CardActions border>
                                </CardActions>
                                <CardMenu style={{color: '#000'}}>
                                    
                                </CardMenu>
                            </Card>
                        </Col>

                        {/* First Hackathon */}
                        <Col xs={12} md = {6} lg={4} style={{marginBottom: '4em'}}>
                            <Card shadow={5} style ={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle className = "projects-hackathon-debug" style={{color: '#000', height: '176px'}}>
                                    ¿Debug?
                                </CardTitle>
                                <CardText>
                                    <hr/>
                                    This was my first ever hackathon. I've only programmed for less than 6 months, so everything was new to me. 
                                    I worked on this project back in May 2018 with 3 other clueless students (who we are still friends today), and we had a lot of fun learning developing as a group, and also how to work collaboratively as a team. 
                                    <p>
                                        P.S. The code that you see in that Github is really bad, so I wouldn't suggest going into it!
                                        <p></p>
                                        Lessons learnt:
                                        <li>Learn how to use Git.</li>
                                        <li>Actually learn how to use Git.</li>
                                        <li>How to set up environmental variables so your applications actually work.</li>
                                    </p>
                                </CardText>
                                <CardActions border>
                                    <Button colored onClick={this.toGithubCheesenCracker.bind(this)}>Github</Button>
                                </CardActions>
                                <CardMenu style={{color: '#000'}}>
                                    
                                </CardMenu>
                            </Card>
                        </Col>
                        </Row>

                    </Container>
                </div>
            )
        }
    };

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab = {this.state.activeTab} onChange ={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Academic</Tab>
                    <Tab>Work</Tab>
                    <Tab>Personal/Hackathons</Tab>
                </Tabs>
                <div className = "projects-content">{this.toggleCategories()}</div>
            </div>
        )
    }
}

export default Projects;