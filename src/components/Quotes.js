import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';
import './css/Quotes.css';

const Quotes = () => {
    return (
      <Carousel 
        controls={false} 
        indicators={false} 
        interval={4000}
        >
        <Carousel.Item>
          <h2>Hi, I'am Francisco</h2>
          <br></br>
          <p>A Backend Developer (Python/PHP/Node.js &#10084;)</p>
        </Carousel.Item>
        <Carousel.Item>
          <h2>Expert Infrastructure Devops</h2>
          <br></br>
          <p>Vmware Developer & Ansible</p>
        </Carousel.Item>
        <Carousel.Item>
          <h2>Expert in Automation</h2>
          <h2>& SysAdmin</h2>
          <br></br>
          <p>Scripting [Python,Bash,Powershell]</p>
        </Carousel.Item>
        <Carousel.Item>
          <h2>Frontend Skills</h2>
          <br></br>
          <p>I can also play against frontend developers :)</p>
        </Carousel.Item>
        <Carousel.Item>
          <h2>I do more things ....</h2>
          <br></br>
          <p><Nav.Link href="/react-my-personal-site/resume">Resume Page</Nav.Link></p>
        </Carousel.Item>
        
      </Carousel>
        
    );
}

export default Quotes;