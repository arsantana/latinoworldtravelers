import React, {useState, useEffect, useRef}  from 'react';
import {css} from '@emotion/core';
import Navigation from '../Navigation';
import Slider from '../Slider/Slider';

const images = [
  'https://res.cloudinary.com/dprf77yeq/image/upload/v1588996962/Latino%20World%20Travelers/slide1.jpg',
  'https://res.cloudinary.com/dprf77yeq/image/upload/v1588996963/Latino%20World%20Travelers/slide2.jpg',
  'https://res.cloudinary.com/dprf77yeq/image/upload/v1588996964/Latino%20World%20Travelers/slide3.jpg'
]


const Header = () => {
  return(
    <header>
      <Navigation />
      <div css={HeaderCSS}>
        <div css={HeadingCSS}>
          <div>
            <span>Dream.</span>
            <span>Discover.</span>
            <span>Inspire.</span>
          </div>
          <p css={SubHeadingCSS}>Empowering Latinos to grow out of their comfort zone and break barriers through travel. </p>
        </div>
      </div>
      <Slider slides={images} autoPlay={5} />
    </header>
  )
}

const NavCSS = css`
 
  
`

const HeaderCSS = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, .8));
  height: 100%;
  width: 100%;
`
const HeadingCSS = css`
display: flex;
flex-direction: column;
color: #fff;
font-size: 4.5rem;
text-align: center;
text-transform: uppercase;
letter-spacing: .5rem;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

@media (max-width: 420px) {
  font-size: 3.6rem;
  top: 40%;
  flex-direction: column;
  line-height: 5.7rem;
  letter-spacing: .7rem;
}
`
const SubHeadingCSS = css`
  color: #fff;
  font-size: 1.6rem;
  font-weight: 300;
  text-align: center;
  letter-spacing: .5rem;
  display: inline;

`

export default Header;