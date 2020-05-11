/** @jsx jsx */
// import React from 'react'
import { css, jsx } from '@emotion/core'
import leftArrow from '../../images/left-arrow.svg'
import rightArrow from '../../images/right-arrow.svg'

const Arrow = ({ direction, handleClick }) => (
  <div
    onClick={handleClick}
    css={css`
      display: flex;
      position: absolute;
      top: 50%;
      ${direction === 'right' ? `right: 25px` : `left: 25px`};
      height: 5rem;
      width: 5rem;
      justify-content: center;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      align-items: center;
      transition: all ease-in 0.1s;
      opacity: .4;
      z-index: 1000;
      &:hover {
        transform: scale(1.1);
        opacity: 1;
      }
      img {
        transform: translateX(${direction === 'left' ? '-2' : '2'}px);
        &:focus {
          outline: 0;
        }
      }
    `}
  >
    {direction === 'right' ? <img src={rightArrow} /> : <img src={leftArrow} />}
  </div>
)

export default Arrow