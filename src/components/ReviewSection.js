import React from 'react';
import { Container } from 'react-bootstrap';
import shore from '../images/shore.mp4'

const ReviewSection = () => {
  return(
    <section className="review-section">
      <div className="bg-video">
        <video autoPlay loop muted playsInline>
          <source src={shore} type='video/mp4' />
        </video>
      </div>
      <Container className="d-flex align-items-center">
      <div className="review ">
        <h3 className="heading-secondary text-white">
          Reviews
        </h3>
      <div>
        <p className="review__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam laboriosam nulla esse laborum, vel iste dolorem necessitatibus sapiente quisquam voluptate soluta quidem tempora enim! Quam odit quia laudantium nobis ad.
        </p>
      </div>
      </div>
      </Container>
    </section>
  )
}

export default ReviewSection;