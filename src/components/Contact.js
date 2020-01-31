import React from 'react';
import './css/Contact.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const Contact = () => {
    return (
        <div className="contact-body">
            <Row className="contact-grid">
                <Col sm={12} lg={6}>
                    <h2>Francisco José Camacho Maya</h2>
                    <img
                    src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                    alt="avatar"
                    style={{height: '250px'}}
                    />
                <p style={{ width: '75%', margin: 'auto', paddingTop: '1em',textAlign: 'justify'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's 
                </p>

                <p style={{ width: '75%', margin: 'auto', paddingTop: '1em',textAlign: 'justify'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's 
                </p>
                
                </Col>
               
                <Col sm={12} lg={6}> 
                    
                    <ListGroup className="lista">
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <ListGroup.Item  style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <i className="fa fa-envelope-open" aria-hidden="true"/>
                            <span>&nbsp;francisco.camacho15@gmail.com</span>
                        </ListGroup.Item>
                        <ListGroup.Item style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <i className="fa fa-telegram" aria-hidden="true"/>
                            <span>&nbsp;@fenix15100</span>
                        </ListGroup.Item>
                        <ListGroup.Item  style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-twitter" aria-hidden="true"/>
                        <span>&nbsp;@fenix15100</span>
                        </ListGroup.Item>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </ListGroup> 
                    
                      
                </Col>
            </Row>

        </div>
    );
}

export default Contact;