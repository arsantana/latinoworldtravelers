import React from 'react';
import Review from './Reviews/Review';
import { css } from '@emotion/core';
import shore from '../images/shore.mp4'

const ReviewSection = () => {
  return(
    <section className="review-section">
      <div css={css`
          background-color: rgba(0, 0, 0, .2);
          width: 100%;
        `}>
      <div className="bg-video">
        <video autoPlay loop muted playsInline>
          <source src={shore} type='video/mp4' />
        </video>
      </div>
      <div className="container d-flex flex-column align-items-center">
        <h1 className="heading-secondary">We make people genuinely happy!</h1>
        <Review />
      </div>
      </div>
    </section>
  )
}

export default ReviewSection;

