import React,{useState} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Row,Col } from 'react-bootstrap';
// TAGS import Badge from 'react-bootstrap/Badge'
const Projects = () => {

    const [key, setKey] = useState('home');

    return (
        <Row>
            <Col>
                <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
                    <Tab eventKey="home" title="Home">
                        <h1>python</h1>
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        <h1>python1</h1>
                    </Tab>
                    <Tab eventKey="contact" title="Contact">
                        <h1>python2</h1>
                    </Tab>
                </Tabs>
            </Col>


        </Row>
        
    );
}

export default Projects;