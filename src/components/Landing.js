import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import avatar from './assets/avatar2.jpg'

import './css/Landing.css'
const Landing = () => {
    return (
            <Row className="landing-grid text-center">
                <Col sm={12}>
                        <div className="card">
                            <div className="card__image-container">
                                <img className="card__image" src={avatar} alt="me"/>
                            </div>
      
                            <svg className="card__svg" viewBox="0 0 800 500">

                                <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333"/>
                                <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth="3" fill="transparent"/>
                            </svg>
    
                            <div className="card__content">
                            <h4 className="card__title">Francisco José Camacho Maya</h4>
                            <p>{`{Another Full stack developer}`}</p>
                            </div>
                        </div>
                </Col>           
            </Row>    
    );
}

export default Landing;