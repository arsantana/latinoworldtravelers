import React from 'react';
import {css} from '@emotion/core';
import FlipCard from './Cards/FlipCard';



const GetInvolved = () => {
  return(
    <section css={css`
    display: flex;
    flex-direction: column;
    text-align: center;
    `} 
    className='get-involved'>
      <div css={css`
        background-color: rgba(0, 0, 0, .5);
      `}>
      <h1 className='heading-secondary' css={css`
        margin-top: 2rem;
      `}>
        Ven pa' ac&#225;!
      </h1>
      <div className='flipcards' css={css`
        display: flex;
        justify-content: center;
    `}>
        <FlipCard 
          heading="Represent the Brand"
          details="Yes, I want to be a brand ambassador!"
        >
          
        </FlipCard>
        <FlipCard 
          heading="Curate Local Events"
          details="Yes, I want to be a Wanderlust Coordinator!"
        />
        <FlipCard 
          heading="Share your Stories"
          details="Yes, I want to be a guest writer!"
        />
        <FlipCard 
          heading="Take over our instagram"
          details="Yes, I want to share my journey or be a storyteller!"
        />
      </div> 
      </div>
    </section>
  )
}

export default GetInvolved;