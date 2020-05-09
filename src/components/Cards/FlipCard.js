import React from 'react';
import {BsPersonSquare} from "react-icons/bs";

const FlipCard = (props) => {
  console.log(props);
  return(
    <div className="flipcard">
      <div className="flipcard__side flipcard__side--front">
        <div className="flipcard__icon"><BsPersonSquare /></div>
        <h4 className="flipcard__heading">{props.heading}</h4>
      </div>
      <div className="flipcard__side flipcard__side--back">
        <div className="flipcard__details">{props.details}</div>
        <button className='card-btn'>Learn More &rarr;</button>
      </div>
    </div>
  )
}

export default FlipCard;