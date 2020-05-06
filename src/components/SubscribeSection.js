import React from 'react';
import SubscribeForm from './SubscribeForm';
import { Container } from 'react-bootstrap'

const SubscribeSection = () => {
  return(
    <div className="subscribe-section">
      <Container>
      <h2 className="heading-secondary">
        Subscribe
      </h2>
      <SubscribeForm />
      </Container>
    </div>
  )
}

export default SubscribeSection;