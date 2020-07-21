import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Layout, Header, Navigation, Drawer } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/main';

import Pdf from '../CVs/IEEE_Ryan_TAN.pdf';

class App extends React.Component {
  hideToggle() {
    var selectorId = document.querySelector('.mdl-layout');
    selectorId.MaterialLayout.toggleDrawer();
  }

  openPdf(){
    window.open(Pdf);
    this.hideToggle();
  }

  openPdfDesktop(){
    window.open(Pdf);
  }

  render(){
    return (
      <div className="demo-big-content">
        <Layout>
            <Header className="nav-bar" title={<Link style={{textDecoration: 'none', color: 'white'}} to = "/">Home</Link>} scroll>
                <Navigation>
                    <Link to ="/aboutme">About Me</Link>
                    <Link to ="/timelines">Timeline(s)</Link>
                    <Link to ="/projects">Projects</Link>
                    <Link to ="/contact">Contact</Link>
                    {/* <Link to ="/testimonials">Testimonials</Link> */}
                    <Link to ="*">Oh no!</Link>
                    <Link onClick = {() => this.openPdfDesktop()}><i class="fa fa-download"/>Resume</Link>
                </Navigation>
            </Header>
            <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to ="/">Home</Link>}>
                <Navigation>
                    <Link to ="/aboutme" onClick = {() => this.hideToggle()}>About Me</Link>
                    <Link to ="/timelines" onClick = {() => this.hideToggle()}>Timeline(s)</Link>
                    <Link to ="/projects" onClick = {() => this.hideToggle()}>Projects</Link>
                    <Link to ="/contact" onClick = {() => this.hideToggle()}>Contact</Link>    
                    {/* <Link to ="/testimonials" onClick = {() => this.hideToggle()}>Testimonials</Link> */}
                    <Link to ="*" onClick = {() => this.hideToggle()}>Oh no!</Link>            
                    <Link onClick = {() => this.openPdf()}><i class="fa fa-download"/>Resume</Link>
                </Navigation>
            </Drawer>
                <Main />
        </Layout>
      </div>
    );
  }
}

export default App;