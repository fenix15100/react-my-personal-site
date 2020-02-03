import React from 'react';
import './css/Contact.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Figure from 'react-bootstrap/Figure'

const Contact = () => {
    return (
        <div className="contact-body">
            <Row className="contact-grid">
                <Col sm={12} lg={6}>
                    <h2>Francisco José Camacho Maya</h2>
                    <Figure>
                        <img
                        src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                        alt="avatar"
                        style={{height: '250px'}}
                        />
                        <Figure.Caption>
                            <p>Es muy posible que  no tenga este aspecto :)</p>
                        </Figure.Caption>
                    </Figure>
                <p style={{ width: '75%', margin: 'auto', paddingTop: '1em',textAlign: 'justify'}}>
                    Si necesitais ponerse en contacto conmigo o estais interesados en mi código,
                    podeis hacerlo a traves de mis networks 
                </p>
                
                </Col>
               
                <Col sm={12} lg={6}> 
                    
                    <ListGroup className="lista">
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

                        <ListGroup.Item  style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <a href="mailto:francisco.camacho15@gmail.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-envelope-open" aria-hidden="true"/>
                                <span>&nbsp;francisco.camacho15@gmail.com</span>
                            </a>
                        </ListGroup.Item>

                        <ListGroup.Item  style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <a href="https://www.linkedin.com/in/franciscojosecamacho/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin" aria-hidden="true"/>
                                <span>&nbsp;franciscojosecamacho</span>
                            </a>
                        </ListGroup.Item>

                        <ListGroup.Item style={{fontSize: '30px', fontFamily: 'Anton'}}> 
                            <i className="fa fa-telegram" aria-hidden="true"/>
                            <span>&nbsp;@fenix15100</span>   
                        </ListGroup.Item>

                        <ListGroup.Item  style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <a href="https://twitter.com/fenix15100" target="_blank" rel="noopener noreferrer">  
                            <i className="fa fa-twitter" aria-hidden="true"/>
                            <span>&nbsp;@fenix15100</span>
                        </a>
                        </ListGroup.Item>

                        <ListGroup.Item  style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <a href="https://github.com/fenix15100" target="_blank" rel="noopener noreferrer"> 
                                <i className="fa fa-github" aria-hidden="true"/>
                                <span>&nbsp;@fenix15100</span>
                            </a>
                        </ListGroup.Item>

                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </ListGroup> 
                    
                      
                </Col>
            </Row>

        </div>
    );
}

export default Contact;