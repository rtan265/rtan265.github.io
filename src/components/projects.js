import React from 'react';
import { Tabs, Tab, Grid } from 'react-mdl';

class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            activeTab: 0 
        };
    }

    toggleCategories() {
        if (this.state.activeTab === 0){
            return(
                <div>
                    <h1>Personal Website Project</h1>
                </div>
            )
        } else if (this.state.activeTab === 1){
            return (
                <div><h1>DEVS Hackathon Project</h1></div>
            )
        } else if (this.state.activeTab === 2){
            return (
                <div><h1>345 Project</h1></div>
            )
        } else if (this.state.activeTab === 3){
            return (
                <div><h1>230 A2</h1></div>
            )
        } else if (this.state.activeTab === 4){
            return (
                <div><h1>230 A1</h1></div>
            )
        } else if (this.state.activeTab === 5){
            return (
                <div><h1>First Hackathon 2018</h1></div>
            )
        }
    };

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab = {this.state.activeTab} onChange ={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Personal Website</Tab>
                    <Tab>Scammr</Tab>
                    <Tab>Group Work</Tab>
                    <Tab>Trace File Viewer</Tab>
                    <Tab>Moving Shapes</Tab>
                    <Tab>¿Debug?</Tab>
                </Tabs>

                <Grid>
                    <div className = "content">{this.toggleCategories()}</div>
                </Grid>
            </div>
        )
    }
}

export default Projects;