import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const Quotes = () => {
    return (
      <Carousel 
        controls={false} 
        indicators={false} 
        interval={3000}
        >
        
        <Carousel.Item>
          <h2>Hi, I'am Francisco</h2>
          <p>A Full Stack Developer</p>
        </Carousel.Item>
        <Carousel.Item>
          <h2>Hi, I'am Francisco</h2>
          <p>A Junior DevOps</p>
        </Carousel.Item>
        <Carousel.Item>
          <h2>Hi, I'am Francisco again..</h2>
          <p>A ['SysAdmin',Scripter,'Atomation Boy']</p>
        </Carousel.Item>
      </Carousel>
        
    );
}

export default Quotes;