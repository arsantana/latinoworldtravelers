import React from 'react';
import { Container } from 'react-bootstrap';

const Services = () => (
  <div className="services-section">
    <div className="services-group d-flex align-items-center">
    <Container>
      <h1 className="heading-secondary ">
        Services
      </h1>
      <div className="services">
        <div className="service">
          <h3 className="heading-tertiary">Service A</h3>
          <p className="paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, magnam quas. Corporis vel voluptatem excepturi maxime unde? Inventore, reprehenderit unde.</p>
        </div>
        <div className="service">
        <h3 className="heading-tertiary">Service B</h3>
        <p className="paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, magnam quas. Corporis vel voluptatem excepturi maxime unde? Inventore, reprehenderit unde.</p>
        </div>
        <div className="service">
        <h3 className="heading-tertiary">Service C</h3>
        <p className="paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, magnam quas. Corporis vel voluptatem excepturi maxime unde? Inventore, reprehenderit unde.</p>
        </div>
      </div>
      </Container>
    </div>
  </div>
);

export default Services;