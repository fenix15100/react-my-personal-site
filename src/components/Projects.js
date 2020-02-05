import React, { useState } from 'react';
import { Row,Col } from 'react-bootstrap';
import Project from './Project';
import CenteredModal from './CenteredModal';
import './css/Projects.css'

const Projects = () => {

    const [modalShow,setModalShow] = useState(false);
    const [modalContent,setModalContent] = useState({});
    const [projects,setProjects] = useState([]);

    //crear custom hook que recupere en cada render(useEffects()) un array de objetos projecto de un db.json
    
    

    return (
        <Row>
            <Col>
                {/* loop projects*/}
                {projects.map(project=>(
                    <Project
                        setModalShow={setModalShow}
                        setModalContent={setModalContent}
                        project={project}
                    />

                ))}
                
                {/* loop projects*/}
                <CenteredModal
                    show={modalShow}
                    modalContent={modalContent}
                    onHide={() => setModalShow(false)}
                />

            </Col>
        </Row>
                
         
        
    );
}

export default Projects;