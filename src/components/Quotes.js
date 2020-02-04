import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const Quotes = () => {
    return (
      <Carousel controls={true} indicators={false} interval={3500} className="quotes">
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