import React from 'react';
import shore from '../images/shore.mp4'

const ReviewSection = () => {
  return(
    <section className="review-section curr">
      <div className="bg-video">
        <video autoPlay loop muted playsInline>
          <source src={shore} type='video/mp4' />
        </video>
      </div>
      <h3 className="heading-secondary">
        Reviews
      </h3>
      <div className="review">
        <p className="review__content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam laboriosam nulla esse laborum, vel iste dolorem necessitatibus sapiente quisquam voluptate soluta quidem tempora enim! Quam odit quia laudantium nobis ad.
        </p>
      </div>
    </section>
  )
}

export default ReviewSection;