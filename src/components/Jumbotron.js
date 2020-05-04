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
      <Container>
        <h1>{props.heading}</h1>
      </Container>
    </Jumbotron>
  )
}

export default Jumbo;