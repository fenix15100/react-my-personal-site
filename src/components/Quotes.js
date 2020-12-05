import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';
import {isMobile} from 'react-device-detect';
import './css/Quotes.css';

const Quotes = () => {
    return (
      <Carousel 
        controls={isMobile?false:true} 
        indicators={false} 
        interval={4000}
        >
          <Carousel.Item>
              <div className="caption-carousel">
                <h2>Hi, I'am Francisco</h2>
                
                <p>A Backend Developer (Python/PHP/Node.js &#10084;)</p>
              </div>   
          </Carousel.Item>

          <Carousel.Item>
            <div className="caption-carousel">
              <h2>Infrastructure Devops</h2>
              <p>Vmware SDK Developer</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="caption-carousel">
              <h2>Automation</h2>
              
              <p>Scripting [Python,Bash,Powershell]</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="caption-carousel">
              <h2>Frontend Skills</h2>
              
              <p>I can also play against frontend developers :)</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="caption-carousel">
            <h2>I do more things ....</h2>
            <Nav.Link href="/react-my-personal-site/resume">Resume Page</Nav.Link>
          </div>  
          </Carousel.Item>  
      </Carousel>
        
    );
}

export default Quotes;