import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const SubscribeForm = () => {
  return(
    <div className="subscribe-form">
      <Form>
        <Form.Row>
          <Col>
          <Form.Control placeholder="Full name" />
          </Col>
          <Col>
          <Form.Control placeholder="Email Address" />
          </Col>
          <Button>Subscribe</Button>
        </Form.Row>
      </Form>
    </div>
  )
}

export default SubscribeForm;