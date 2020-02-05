import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import './css/Projects.css'
//TODO crear estilos css propios aqui y en el modal

const Project = ({project,setModalShow,setModalContent}) => {

    const handleClick = ()=>{
        console.log(project)
        setModalContent(project);
        setModalShow(true);
    }


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={project.img}/>
            <Card.Body>
                <Card.Title>
                    {project.title}<br/> 
                    {project.badge.map((badge,index) =>(
                        <Badge key={index} pill variant={badge.color}>{badge.title}</Badge>
                    ))}
                </Card.Title>
                <Card.Text>
                    {project.description.length > 120
                        ? project.description.substring(0,120)+"..."
                        : project.description
                    }
                </Card.Text>
                <div className="card-actions">
                    <Button size="sm" variant="outline-info">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            Git hub
                        </a> 
                    </Button>
                    <Button 
                        onClick={handleClick} 
                        size="sm" 
                        variant="outline-info"
                    >
                        More Info
                    </Button>
                    <Button size="sm" variant="outline-info">
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                            Live Demo
                        </a>   
                    </Button>
                </div>
            </Card.Body>
        </Card>
        
    );
}

export default Project;