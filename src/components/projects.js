import React from 'react';
import { Tabs, Tab, Card, CardTitle, CardActions, Button, CardMenu, CardText } from 'react-mdl';
import { Container, Col, Row } from 'react-bootstrap';

// Add new Project: Learnfroma.kiwi


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
                                    This assignment was developed in 2019 using Python in Jupyter Notebooks. This program was trained using 4000 instances, and then used to test 1000 instances of biological abstracts.                            
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
                                    This assignment was developed as a group in 2019 using HTML, CSS and JavaScript. We built and designed this group work system as a group, and only focused on three pages, to reflect on design principles taught in class. 
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
                                    This assignment was developed in 2018 using Java. This application takes in large and small trace files, and generates a visual graph that correlates to the amount of data being sent/received to a particular host.
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
                                    This assignment was developed in 2018 using Java. This application generates moving shapes upon a user clicking on a random spot in the window. The user can also choose to change the shapes, colour and moving direction.
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
                                        <li>To learn quickly, you need to learn to be comfortable with failing.</li>
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
                                        <li>Do not use absolute positions!!!!!! Just because it looks good on your machine, doesn't mean it'll look good on others.</li>
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

                        {/* MERN - Movie Application */}
                        <Col  xs={12} md = {6} lg={4} style={{marginBottom: '4em'}}>
                            <Card shadow = {5} style = {{mindWidth: '450', margin: 'auto'}}>
                                <CardTitle className = "projects-mern-movieapps" style = {{color: '#000', height: '176px'}}>
                                    MERN Application
                                </CardTitle>
                                <CardText>
                                    <hr/>
                                    some description
                                    <p>
                                        list of what I learnt
                                    </p>
                                </CardText> 
                                <CardActions border>

                                </CardActions>
                                <CardMenu style = {{color: '#000'}}>

                                </CardMenu>
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
                                    I worked on this project back in May 2018 with 3 other clueless students (who we are still friends today), and we had a lot of fun learning about developing as a group, and also how to work collaboratively as a team. 
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