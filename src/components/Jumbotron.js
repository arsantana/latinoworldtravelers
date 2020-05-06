import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { css } from '@emotion/core';


const Jumbo = (props) => {
  return(
    <Jumbotron css={css`
      height: 30vh;
      width: 100%;
      background: url('${props.img}');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      background-attachment: fixed;
    `}>
      <Container css={css`
      background: rgba(0, 0, 0, .5);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      `
    }>
        <h1 css={css`
          color: white;
          text-transform: uppercase;
          letter-spacing: .2rem;
        `}>{props.heading}</h1>
      </Container>
    </Jumbotron>
  )
}

export default Jumbo;