import React from 'react';

const FlipCard = () => {
  return(
    <div className="flipcard">
      <div className="flipcard__side flipcard__side--front">
        <i className="flipcard__icon">x</i>
        <h4 className="flipcard__heading">Become an ambassador</h4>
      </div>
      <div className="flipcard__side flipcard__side--back">
        <div className="flipcard__details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, totam?</div>
        <button>Learn More &rarr;</button>
      </div>
    </div>
  )
}

export default FlipCard;