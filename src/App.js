import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Layout, Header, Navigation, Drawer } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/main';

class App extends React.Component {
  hideToggle() {
    var selectorId = document.querySelector('.mdl-layout');
    selectorId.MaterialLayout.toggleDrawer();
  }

  render(){
    return (
      <div className="demo-big-content">
        <Layout>
            <Header className="nav-bar" title={<Link style={{textDecoration: 'none', color: 'white'}} to = "/">Home</Link>} scroll>
                <Navigation>
                    <Link to ="/aboutme">About Me</Link>
                    <Link to ="/timelines">Timeline(s)</Link>
                    <Link to ="/resume">Resume</Link>
                    <Link to ="/projects">Projects</Link>
                    <Link to ="/contact">Contact</Link>
                    <Link to ="*">Oh no!</Link>
                </Navigation>
            </Header>
            <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to ="/">Home</Link>}>
                <Navigation>
                    <Link to ="/aboutme" onClick = {() => this.hideToggle()}>About Me</Link>
                    <Link to ="/timelines" onClick = {() => this.hideToggle()}>Timeline(s)</Link>
                    <Link to ="/resume" onClick = {() => this.hideToggle()}>Resume</Link>
                    <Link to ="/projects" onClick = {() => this.hideToggle()}>Projects</Link>
                    <Link to ="/contact" onClick = {() => this.hideToggle()}>Contact</Link>    
                    <Link to ="*" onClick = {() => this.hideToggle()}>Oh no!</Link>            
                </Navigation>
            </Drawer>
                <Main />
        </Layout>
      </div>
    );
  }
}

export default App;