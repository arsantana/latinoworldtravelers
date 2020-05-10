import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

const SubscribeForm = () => {
  return(
    <div className="subscribe-form">
      <Form >
        <Form.Row className='d-flex justify-content-center'>
          <Col xs={12} sm={6} md={4}>
          <Form.Control placeholder="Full name" />
          </Col>
          <Col xs={12} sm={6} md={4}>
          <Form.Control placeholder="Email Address" />
          </Col>
          <Button className='color-primary'>Subscribe</Button>
          
        </Form.Row>
      </Form>
    </div>
  )
}

export default SubscribeForm;