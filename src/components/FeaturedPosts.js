import React from 'react';
import jordan from '../images/jordan.jpg';
import bali from '../images/bali.jpg';
import peru from '../images/peru.jpg';
import {Container, CardDeck, Card, Row, Button } from 'react-bootstrap';

const FeaturedPosts = () => {
  return(
    <section className="featuredposts-section container">
      <Container>
      <h2 className="heading-secondary heading-teal">
        Travel Blog
      </h2>
      <Row>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={jordan} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
  <Card>
    <Card.Img variant="top" src={bali} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={peru} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
</Row>
<Row className='my-4 d-flex justify-content-center'>
        <Button className='btn color-primary'>View More</Button>
      </Row>
      </Container>
    </section>
  )
}

export default FeaturedPosts;