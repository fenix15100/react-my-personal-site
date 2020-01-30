import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Router from './components/Router'



function App() {
  return (
    <>
    <Navbar className="header-bg" variant="light"  expand="lg">
      <Navbar.Brand href="/myPersonalSite/">MyPersonalSite</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/myPersonalSite/">Home</Nav.Link>
          <Nav.Link href="/myPersonalSite/resume">Resume</Nav.Link>
          <Nav.Link href="/myPersonalSite/about-me">AboutMe</Nav.Link>
          <Nav.Link href="/myPersonalSite/projects">Projects</Nav.Link>
          <Nav.Link href="/myPersonalSite/contact">Contact</Nav.Link>  
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
