import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import bali from '../images/bali.jpg';

const Destinations = () => {
  return(
    <section className="destinations-section container text-align-center ">
      <Container>
      <h2 className="heading-secondary heading-teal">
        Destinations
      </h2>
      <Row className='mt-4'>
        <Col xs={12} sm={6} md={4}>
          <Card>
            <Card.Img src={bali} />
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Card>
            <Card.Img src={bali} />
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Card>
            <Card.Img src={bali} />
          </Card>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col xs='12' sm='7' md='4'>
          <Card>
            <Card.Img src={bali} />
          </Card>
        </Col>
        <Col xs='12' sm='7' md='4'>
          <Card>
            <Card.Img src={bali} />
          </Card>
        </Col>
        <Col xs='12' sm='4' md='4'>
          <Card>
            <Card.Img src={bali} />
          </Card>
        </Col>
      </Row>
      <Row className='my-4 d-flex justify-content-center'>
        <Button className='btn color-primary'>View More</Button>
      </Row>
      </Container>
    </section>
  )
}

export default Destinations;