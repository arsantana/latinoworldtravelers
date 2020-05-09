import React, { useState } from 'react';
import {css, cx} from '@emotion/core';


const Quote = () => {
  const quotes = {
    0: {
      client: "Awesome Client, Acme & Co.",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, eveniet?"
    },
    1: {
      client: "Sweet Client, Acme LLC",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, eveniet?"
    },
    2: {
      client: "Cool Client, Acme Inc.",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, eveniet?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, eveniet?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, eveniet?"
    },
    3: {
      client: "Rad Client, Acme Company",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, eveniet?"
    },
  }

  const [current, setCurrent] = useState(quotes[0])
  const [active, setActive] = useState(0)

  const handleSetClick = (event) => {
    setCurrent(quotes[event.target.getAttribute("data-quote")])
    setActive(event.target.getAttribute("data-quote"))
  }


  return (
    <div 
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 40px auto;
        max-width: 70rem;
        background-color: rgba(255, 255, 255, .8);
        width: 70vw;
        padding: 3rem 0;

        p {
          text-align: center;
          margin-bottom: 2rem;
          color: #45454d;
        }
    `}>
      <p>{current.quote}</p>
      <p>{current.client}</p>
      <div
        css={css`
          display: flex;
          

          span {
            height: 2rem;
            width: 2rem;
            margin: 0 .3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }

          span::before {
            content: "";
            height: .6rem;
            width: .6rem;
            background-color: #d4d4d4;
            border-radius: 5rem;
            transition: background-color .3s ease;
          }

          span:hover::before {
            background-color: #45454d;
          }

          span[data-quote="${active}"]::before {
            background-color: #45454d;
          }
        `}
      >
        {Object.keys(quotes).map(index => (
          <span 
            onClick={event => handleSetClick(event)}
            data-quote={index}
            key={index}
          />
        ))}
      </div>
      
    </div>
  )
}

export default Quote