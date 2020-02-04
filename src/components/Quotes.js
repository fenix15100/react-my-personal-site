import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const Quotes = () => {
    return (
      <Carousel 
        controls={true} 
        indicators={false} 
        interval={3500}
        prevIcon={<span><i className="fa fa-angle-left" aria-hidden="true"></i></span>}
        nextIcon={<span><i className="fa fa-angle-right" aria-hidden="true"></i></span>}
        >
        
        <Carousel.Item>
          <h2>Hi, I'am Francisco A Full Stack Developer</h2>
        </Carousel.Item>
        <Carousel.Item>
          <h2>LORE</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Item>
      </Carousel>
        
    );
}

export default Quotes;