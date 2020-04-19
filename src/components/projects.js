import React from 'react';
import { Tabs, Tab, Card, CardTitle, CardActions, Button, CardMenu, CardText } from 'react-mdl';
import { Container, Col, Row } from 'react-bootstrap';


class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
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
                                <CardTitle className = "Naive-Bayes" style={{color: '#000', height: '176px'}}>
                                    Naive Bayes Classifier</CardTitle>
                                <CardText>
                                    <hr/>
                                    info info info
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
                                    info info info
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
                                    info info info
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
                                    info info info
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

                        {/* // react project #1 */}
                        <Col xs={12} md = {6} lg={6} style={{marginBottom: '4em'}}>
                            <Card shadow={5} style ={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle className = "projects-dat" style={{color: '#000', height: '176px'}}>
                                    Data Annotation Tool</CardTitle>
                                <CardText>
                                    <hr/>
                                    info info info
                                </CardText>
                                <CardActions border>
                                </CardActions>
                            </Card>
                        </Col>

                        {/* // react project #2 */}
                        <Col xs={12} md = {6} lg={6} style={{marginBottom: '4em'}}>
                            <Card shadow={5} style ={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle className = "projects-tc" style={{color: '#000', height: '176px'}}>
                                    Ticket Classifier</CardTitle>
                                <CardText>
                                    <hr/>
                                    info info info
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
                                    info info info
                                </CardText>
                                <CardActions border>
                                    <Button colored onClick={this.toGithubPersonalWebsite.bind(this)}>Github</Button>

                                    <Button colored disabled = {true}>Live Demo</Button>
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
                                    info info info
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
                                    info info info
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