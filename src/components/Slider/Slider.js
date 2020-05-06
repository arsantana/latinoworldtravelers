/** @jsx jsx */
import React, { useState, useEffect, useRef } from 'react'
import { css, jsx } from '@emotion/core'
import SliderContent from './SliderContent'
import Slide from './Slide'
import Arrow from './Arrow'
import Dots from './Dots'

const getWidth = () => window.innerWidth

/**
 * @function Slider
 */
const Slider = props => {

  const { slides } = props

  const firstSlide = slides[0]
  const secondSlide = slides[1]
  const lastSlide = slides[slides.length - 1]


  const [state, setState] = useState({
    activeIndex: 0,
    translate: getWidth(),
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide]
  })

  const { translate, transition, activeIndex, _slides } = state

  const autoPlayRef = useRef()

  useEffect(() => {
    autoPlayRef.current = nextSlide
  })

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }

    if (props.autoPlay !== null) {
      const interval = setInterval( play, props.autoPlay * 1000)
      return () => clearInterval(interval)
    }
  }, [props.autoPlay])

const nextSlide = () => 
  setState({
    ...state,
    translate: translate + getWidth(),
    activeIndex: activeIndex === slides.length - 1 ? 0 : activeIndex + 1
  })

const prevSlide = () => 
  setState({
    ...state,
    translate: 0,
    activeIndex: activeIndex === 0 ? slides.length - 1 : activeIndex -1
  })
  
  return (
    <div css={SliderCSS}>
      <div css={HeaderCSS}>
        <h1 css={HeadingCSS}>Dream. Discover. Inspire.</h1>
      </div>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * _slides.length}
      >
        {_slides.map((slide, i) => (
          <Slide key={slide + i} content={slide} />
        ))}
      </SliderContent>

      {!props.autoPlay && (
          <>
            <Arrow direction="left" handleClick={prevSlide} />
            <Arrow direction="right" handleClick={nextSlide} />
          </>
        )}

      <Dots slides={props.slides} activeIndex={activeIndex} />
    </div>
  )
}

Slider.defaultProps = {
  slides: [],
  autoPlay: null
}

const SliderCSS = css`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0;
  overflow: hidden;
`

const HeaderCSS = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background: rgba(0, 0, 0, .3);
  height: 100%;
  width: 100%;
`
const HeadingCSS = css`
color: #fff;
font-size: 4.5rem;
text-align: center;
text-transform: uppercase;
letter-spacing: .5rem;
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default Slider