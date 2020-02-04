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
          <h2>LORE</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Item>
      </Carousel>
        
    );
}

export default Quotes;