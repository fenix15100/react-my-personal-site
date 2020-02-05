import React, { useState, useEffect } from 'react';
import { Row,Col } from 'react-bootstrap';
import Project from './Project';
import CenteredModal from './CenteredModal';
import './css/Projects.css';
import dbData from './assets/db.json';

const Projects = () => {

    const [modalShow,setModalShow] = useState(false);
    const [modalContent,setModalContent] = useState({});
    const [projects,setProjects] = useState([]);

    
    
    useEffect(()=>{
        const data = dbData;
        setProjects(data)

    },[])

    return (
        <Row>
            <Col className="projects-grid">
                {/* loop projects*/}
                {projects.map((project,index)=>(
                    <Project
                        key={index}
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