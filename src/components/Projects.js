import React, { useState, useEffect } from 'react';
import { Row,Col } from 'react-bootstrap';
import Project from './Project';
import CenteredModal from './CenteredModal';
import './css/Projects.css'

const Projects = () => {

    const [modalShow,setModalShow] = useState(false);
    const [modalContent,setModalContent] = useState({});
    const [projects,setProjects] = useState([]);

    
    
    useEffect(()=>{
        //TODO quitar la fakeDB y hacer un custom hook
        const fakedb =[
            {
                title: "LORE",
                img: "https://www.ismedioambiente.com/wp-content/uploads/2019/04/Convenio-Europeo-del-Paisaje.jpg",
                badge: [
                    {
                        title: "react",
                        color: "danger"
                    }
                ],
                description: "loreloreloreloreloresdsdfddsfsfdsfdfdsfs",
                fullDescription: "mala raza",
                github: "https://github.com",
                liveDemo: "https://github.com"


            },
            {
                title: "LORE",
                img: "https://www.ismedioambiente.com/wp-content/uploads/2019/04/Convenio-Europeo-del-Paisaje.jpg",
                badge: [
                    {
                        title: "python",
                        color: "primary"
                    }
                ],
                description: "loreloreloreloreloresdsdfddsfsfdsfdfdsfs",
                fullDescription: "loreloreloreloreloresdsdfddsfsfdsfdfdsfsloreloreloreloreloresdsdfddsfsfdsfdfdsfs",
                github: "https://github.com",
                liveDemo: "https://github.com"
            },
            {
                title: "LORE",
                img: "https://www.ismedioambiente.com/wp-content/uploads/2019/04/Convenio-Europeo-del-Paisaje.jpg",
                badge: [
                    {
                        title: "python",
                        color: "primary"
                    }
                ],
                description: "loreloreloreloreloresdsdfddsfsfdsfdfdsfs",
                fullDescription: "loreloreloreloreloresdsdfddsfsfdsfdfdsfsloreloreloreloreloresdsdfddsfsfdsfdfdsfs",
                github: "https://github.com",
                liveDemo: "https://github.com"
            },
            {
                title: "LORE",
                img: "https://www.ismedioambiente.com/wp-content/uploads/2019/04/Convenio-Europeo-del-Paisaje.jpg",
                badge: [
                    {
                        title: "python",
                        color: "primary"
                    }
                ],
                description: "loreloreloreloreloresdsdfddsfsfdsfdfdsfs",
                fullDescription: "loreloreloreloreloresdsdfddsfsfdsfdfdsfsloreloreloreloreloresdsdfddsfsfdsfdfdsfs",
                github: "https://github.com",
                liveDemo: "https://github.com"
            },
            {
                title: "LORE",
                img: "https://www.ismedioambiente.com/wp-content/uploads/2019/04/Convenio-Europeo-del-Paisaje.jpg",
                badge: [
                    {
                        title: "python",
                        color: "primary"
                    }
                ],
                description: "loreloreloreloreloresdsdfddsfsfdsfdfdsfs",
                fullDescription: "loreloreloreloreloresdsdfddsfsfdsfdfdsfsloreloreloreloreloresdsdfddsfsfdsfdfdsfs",
                github: "https://github.com",
                liveDemo: "https://github.com"
            },
            {
                title: "LORE",
                img: "https://www.ismedioambiente.com/wp-content/uploads/2019/04/Convenio-Europeo-del-Paisaje.jpg",
                badge: [
                    {
                        title: "python",
                        color: "warning"
                    }
                ],
                description: "loreloreloreloreloresdsdfddsfsfdsfdfdsfs",
                fullDescription: "loreloreloreloreloresdsdfddsfsfdsfdfdsfsloreloreloreloreloresdsdfddsfsfdsfdfdsfs",
                github: "https://github.com",
                liveDemo: "https://github.com"
            }

        ]
        setProjects(fakedb)

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