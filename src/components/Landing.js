import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import avatar from './assets/avatar3.jpeg'

import './css/Landing.css'
const Landing = () => {
    return (
            <Row className="landing-grid">
                <Col sm={12} lg={6}>
                        <section className="left-side">
                            <hr/>
                            <h2>"Nunca se rindan, nunca cedan, nunca, nunca, nunca, en nada grande o pequeño,<br/>
                                nunca cedan salvo por las convicciones del honor y el buen sentido"</h2>
                        
                            <hr/>
                        </section>
                </Col>
                <Col sm={12} lg={6}>
                    <section className="rigth-side">
                        <hr/>
                        <hr/>
                    </section>
                </Col>               
            </Row>    
    );
}

export default Landing;