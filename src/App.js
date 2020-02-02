import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/App.css';
import Router from './components/Router'

import {isMobile} from 'react-device-detect';

//https://create-react-app.dev/docs/deployment/
//https://github.com/rafrex/spa-github-pages
//For fix gh pages with client router side


function App() {
 

  
  return (
    <>
    <Navbar className="header-bg justify-content-end" variant="dark"  expand="lg" >
      
<Navbar.Brand href="/react-my-personal-site/">{isMobile?'Fran':'Fran Camacho Maya'}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="justify-content-end" >
          <Nav.Link href="/react-my-personal-site/resume">Resume</Nav.Link>
          <Nav.Link href="/react-my-personal-site/about-me">AboutMe</Nav.Link>
          <Nav.Link href="/react-my-personal-site/projects">Projects</Nav.Link>
          <Nav.Link href="/react-my-personal-site/contact">Contact</Nav.Link>  
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <Container fluid={true}>
      <Router/>
    </Container>
    </>



  );
}
export default App;
