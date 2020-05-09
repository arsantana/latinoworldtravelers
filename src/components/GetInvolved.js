import React from 'react';
import {css} from '@emotion/core';
import FlipCard from './Cards/FlipCard';

const GetInvolved = () => {
  return(
    <section css={css`
    display: flex;
    flex-direction: column;
    text-align: center;
    `} className='get-involved'>
      <h1 className='heading-secondary' css={css`
        margin-top: 2rem;
      `}>
        Ven pa' ac&#225;!
      </h1>
      <div className='flipcards' css={css`
        display: flex;
        justify-content: center;
    `}>
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
      </div> 
    </section>
  )
}

export default GetInvolved;