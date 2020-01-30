import React from 'react';
import './css/Contact.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

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
                   
                </Col>

            </Row>

        </div>
    );
}

export default Contact;