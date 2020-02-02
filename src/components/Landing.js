import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//import avatar from './assets/avatar3.jpeg'

import './css/Landing.css'
const Landing = () => {
    return (
            <Row className="landing-grid">
                <Col sm={12} lg={6}>
                        <section className="left-side">
                        
                        </section>
                </Col>
                <Col sm={12} lg={6}>
                    <section className="rigth-side">
                    
                    </section>
                </Col>               
            </Row>    
    );
}

export default Landing;