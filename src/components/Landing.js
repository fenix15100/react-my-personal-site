import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import avatar from './assets/avatar.png'

import './css/Landing.css'
const Landing = () => {
    return (
            <Row className="landing-grid text-center">
                <Col sm={12}>
                    <img 
                        src={avatar} 
                        alt="avatar"
                        className="avatar-img img-fluid"
                        
                    />
                </Col>
                <Col sm={12}>
                     <div className="banner-text">
                        <h1>Francisco José Camacho Maya</h1>    
                        <h1>Full Stack Developer</h1>
                        <h1>reCoding minds</h1>
                        <hr/>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/franciscojosecamacho/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>
                            <a href="https://github.com/fenix15100" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github-square" aria-hidden="true"></i>
                            </a>
                            <a href="https://twitter.com/fenix15100" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-twitter-square" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </Col>           
            </Row>    
    );
}

export default Landing;