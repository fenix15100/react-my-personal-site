import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import avatar from './assets/avatar.png';
import './css/Resume.css';

const Resume = () => {
    return (
        <div className="contact-body">
            <Row className="contact-grid">
                <Col sm={12} lg={4}>
                    <Figure>
                        <img
                        src={avatar}
                        //src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                        alt="avatar"
                        style={{height: '250px'}}
                        />
                    </Figure>
                    <h2 style={{paddingTop: '2em'}}>Francisco José Camacho Maya</h2>
                   
                    <h4 style={{color: 'grey'}}>Backend Developer</h4>
                    <h4 style={{color: 'grey'}}>VMware API Developer</h4>
                    <h4 style={{color: 'grey'}}>Infrastructure DevOps</h4>
                    <h4 style={{color: 'grey'}}>Frontend Skills</h4>
                    <h4 style={{color: 'grey'}}>Automation Scripting Skills</h4>
                    
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <p>Saludos, soy un chico de 27 años que vive en Barcelona, al que le apasiona la programación y los sistemas informáticos
                        En estos momentos estoy titulado con un Ciclo de grado superior en Desarrollo de Aplicaciones Web (DAW), 
                        pero estoy cursando el Grado de Ingeniería Informática en la UOC. A puntito de acabar 
                        <span role="img" aria-label="guiño">&#128540;</span>.</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                </Col>
               
                <Col sm={12} lg={7}> 
                    
                    <p>skills</p>
                    
                      
                </Col>
            </Row>

        </div>
    );
}

export default Resume;