import React from 'react';
import { css} from '@emotion/core';

const AboutSection = () => {
  return(
    <section css={css`
      display: flex;
      justify-content: center;
      margin: 2rem;
    `}>
    <div css={css`
      text-align: center;
      align-items: center;
      width: 75%;
      padding: 5rem;
    `}>
      <p css={css`
        color: #333;
        font-size: 1.6rem;
      `}>
        Latino World Travelers is a platform for Latinos who share a passion of traveling or would love to learn about traveling. We are a team of master planners and savvy travelers pushing to inspire and encourage all Latinos to get out of their comfort zone and discover this beautiful place that we call Earth. We host unforgettable group travel experiences and curate personal private trips and corporate retreats.</p>
        <button css={css`
          font-size: 1.4rem;
          padding: 1rem 3rem;
          background-color: #22aae6;
          color: #fff;
          border-radius: 50px;
          margin-top: 3rem;
          text-transform: uppercase;
          letter-spacing: .3rem;
        `}>Learn More</button>
    </div>
    </section>
  )
}

export default AboutSection;