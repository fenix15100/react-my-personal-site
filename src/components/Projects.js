import React from 'react';
import { Row,Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge'
import './css/Projects.css'
// TAGS import Badge from 'react-bootstrap/Badge'
const Projects = () => {

    

    return (
        <Row>
            <Col sm={12} className="projects-grid">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg" />
                    <Card.Body>
                        <Card.Title>
                            Card Title<br/> 
                            <Badge pill variant="primary">react</Badge>
                            <Badge pill variant="warning">python</Badge>
                        </Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <div className="card-actions">
                            <Button size="sm" variant="outline-info">Github</Button>
                            <Button size="sm" variant="outline-info">More Info</Button>
                            <Button size="sm" variant="outline-info">Live Demo</Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <div className="card-actions">
                            <Button size="sm" variant="outline-info">Github</Button>
                            <Button size="sm"variant="outline-info">More Info</Button>
                            <Button size="sm" variant="outline-info">Live Demo</Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <div className="card-actions">
                            <Button size="sm" variant="outline-info">Github</Button>
                            <Button size="sm"variant="outline-info">More Info</Button>
                            <Button size="sm" variant="outline-info">Live Demo</Button>
                        </div>
                    </Card.Body>
                </Card>


                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <div className="card-actions">
                            <Button size="sm" variant="outline-info">Github</Button>
                            <Button size="sm"variant="outline-info">More Info</Button>
                            <Button size="sm" variant="outline-info">Live Demo</Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <div className="card-actions">
                            <Button size="sm" variant="outline-info">Github</Button>
                            <Button size="sm"variant="outline-info">More Info</Button>
                            <Button size="sm" variant="outline-info">Live Demo</Button>
                        </div>
                    </Card.Body>
                </Card>
                
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.ismedioambiente.com/wp-content/uploads/2019/04/Convenio-Europeo-del-Paisaje.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <div className="card-actions">
                            <Button size="sm" variant="outline-info">Github</Button>
                            <Button size="sm"variant="outline-info">More Info</Button>
                            <Button size="sm" variant="outline-info">Live Demo</Button>
                        </div>
                    </Card.Body>
                </Card>

            </Col>
        </Row>
                
         
        
    );
}

export default Projects;