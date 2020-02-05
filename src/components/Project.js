import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const Project = ({project,setModalShow,setModalContent}) => {

    const handleClick = ()=>{
        setModalContent({...project});
        setModalShow(true);
    }


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={project.img}/>
            <Card.Body>
                <Card.Title>
                    {project.title}<br/> 
                    {project.badge.map(badge =>(
                        <Badge pill variant={badge.color}>{badge.title}</Badge>
                    ))}
                </Card.Title>
                <Card.Text>
                    {project.description.length > 120
                        ? project.description.substring(0,120)+"..."
                        : project.description
                    }
                </Card.Text>
                <div className="card-actions">
                    <Button size="sm" variant="outline-info">Github</Button>
                    <Button 
                        onClick={handleClick} 
                        size="sm" 
                        variant="outline-info"
                    >
                        More Info
                    </Button>
                    <Button size="sm" variant="outline-info">Live Demo</Button>
                </div>
            </Card.Body>
        </Card>
        
    );
}

export default Project;