import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//import avatar from './assets/avatar3.jpeg'

import './css/Landing.css'
const Landing = () => {
    return (
            <Row className="landing-grid">
                <Col sm={12}>
                        <section className="left-side">
                            <h2>Hi, my name is Francisco</h2>
                        </section>
                </Col>       
            </Row>    
    );
}

export default Landing;