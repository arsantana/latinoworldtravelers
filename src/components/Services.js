import React from 'react';
import {css} from '@emotion/core';
import { Container } from 'react-bootstrap';

const Services = () => (
  <div className="services-section">
    <div className="services-group d-flex align-items-center">
    <Container>
      <h1 className="heading-secondary ">
        Services
      </h1>
      <p css={css`
        color: white;
        font-size: 1.4rem;
        
        letter-spacing: .2rem;
      `}>Do you want to take a trip but don’t know where to begin? Or are you just too busy to plan your own trip? Let us help!</p>
      <div className="services">
        <div className="service">
          <h3 className="heading-tertiary">Group Trips</h3>
          <p className="paragraph">Perfectly curated and open to anyone seeking adventure, connection or growth.</p>
        </div>
        <div className="service">
        <h3 className="heading-tertiary">Private Trips</h3>
        <p className="paragraph">Incredible travel experiences tailor-made to your needs in full indulgence. </p>
        </div>
        <div className="service">
        <h3 className="heading-tertiary">Corporate Retreats</h3>
        <p className="paragraph">Epic leadership, and team-building retreats that bring your company together.</p>
        </div>
      </div>
      </Container>
    </div>
  </div>
);

export default Services;