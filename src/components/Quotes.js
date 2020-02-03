import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const Quotes = () => {
    return (
      <Carousel controls={true} indicators={false} interval={2000}>
        <Carousel.Item>
          <h2>Mi Nombre es Francisco</h2>
        </Carousel.Item>
        <Carousel.Item>
          <h2>LORE</h2>
          <h2>Second slide label</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        </Carousel.Item>
  </Carousel>
        
    );
}

export default Quotes;