import React,{useState} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Row,Col } from 'react-bootstrap';
import './css/Projects.css';
// TAGS import Badge from 'react-bootstrap/Badge'
const Projects = () => {

    const [key, setKey] = useState('home');

    return (
        <Row className="projects-grid">
            <Col>
                    <Tabs  className="justify-content-center projects-tab-pane" id="controlled-tab" activeKey={key} onSelect={k => setKey(k)}>
                        <Tab eventKey="home" title="Home">
                            <h1>python</h1>
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                            <h1>python1</h1>
                        </Tab>
                        <Tab eventKey="contact" title="Contact">
                            <h1>python2</h1>
                        </Tab>
                        <Tab eventKey="contacff" title="Contact">
                            <h1>python2</h1>
                        </Tab>
                        <Tab eventKey="contacff" title="Contact">
                            <h1>python2</h1>
                        </Tab>
                        <Tab eventKey="contacff" title="Contact">
                            <h1>python2</h1>
                        </Tab>
                        <Tab eventKey="contacff" title="Contact">
                            <h1>python2</h1>
                        </Tab>
                        <Tab eventKey="contacff" title="Contact">
                            <h1>python2</h1>
                        </Tab>
                    </Tabs>
            </Col>


        </Row>
        
    );
}

export default Projects;