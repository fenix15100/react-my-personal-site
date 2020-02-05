import React,{useState} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Row,Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './css/Projects.css';
// TAGS import Badge from 'react-bootstrap/Badge'
const Projects = () => {

    const [key, setKey] = useState('home');

    return (
        <Row className="projects-grid">
                <Col>
                    <Tabs  className="justify-content-center projects-tab-pane" id="controlled-tab" activeKey={key} onSelect={k => setKey(k)}>
                        <Tab  className="projects-tab-pane-content" eventKey="home" title="Home">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <div className="card-actions">
                                        <Button variant="primary">Go somewhere</Button>
                                        <Button variant="primary">Go somewhere</Button>
                                        <Button variant="primary">Go somewhere</Button>
                                    </div>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <div className="card-actions">
                                        <Button variant="primary">Go somewhere</Button>
                                        <Button variant="primary">Go somewhere</Button>
                                        <Button variant="primary">Go somewhere</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Tab>

                        <Tab  className="projects-tab-pane-content" eventKey="home" title="Home">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <div className="card-actions">
                                        <Button variant="primary">Go somewhere</Button>
                                        <Button variant="primary">Go somewhere</Button>
                                        <Button variant="primary">Go somewhere</Button>
                                    </div>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <div className="card-actions">
                                        <Button variant="primary">Go somewhere</Button>
                                        <Button variant="primary">Go somewhere</Button>
                                        <Button variant="primary">Go somewhere</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Tab>

                        <Tab  className="projects-tab-pane-content" eventKey="home" title="Home">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <div className="card-actions">
                                        <Button variant="primary">Go somewhere</Button>
                                        <Button variant="primary">Go somewhere</Button>
                                        <Button variant="primary">Go somewhere</Button>
                                    </div>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <div className="card-actions">
                                        <Button variant="primary">Go somewhere</Button>
                                        <Button variant="primary">Go somewhere</Button>
                                        <Button variant="primary">Go somewhere</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Tab>

                        <Tab  className="projects-tab-pane-content" eventKey="python" title="python">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <div className="card-actions">
                                        <Button variant="primary">Go somewhere</Button>
                                        <Button variant="primary">Go somewhere</Button>
                                        <Button variant="primary">Go somewhere</Button>
                                    </div>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <div className="card-actions">
                                        <Button variant="primary">Go somewhere</Button>
                                        <Button variant="primary">Go somewhere</Button>
                                        <Button variant="primary">Go somewhere</Button>
                                    </div>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <div className="card-actions">
                                        <Button variant="primary">Go somewhere</Button>
                                        <Button variant="primary">Go somewhere</Button>
                                        <Button variant="primary">Go somewhere</Button>
                                    </div>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <div className="card-actions">
                                        <Button variant="primary">Go somewhere</Button>
                                        <Button variant="primary">Go somewhere</Button>
                                        <Button variant="primary">Go somewhere</Button>
                                    </div>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <div className="card-actions">
                                        <Button variant="primary">Go somewhere</Button>
                                        <Button variant="primary">Go somewhere</Button>
                                        <Button variant="primary">Go somewhere</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Tab>
                    </Tabs>
            </Col>


        </Row>
        
    );
}

export default Projects;