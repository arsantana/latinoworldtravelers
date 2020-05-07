import React from 'react';
import bali from '../images/bali.jpg';

const TripCard = () => {
  return(
    <div className="trip-card">
      <figure className='trip-fig'>
        <img className='trip-img' src={bali} />
        <figcaption className='trip-card__caption'>Bali</figcaption>
      </figure>
      <div className="trip-card__details">
        <h3 className="heading-tertiary">Trip Name</h3>
        <p className="text-secondary">January1-15, 2021</p>
      </div>
    </div>
  )
}

export default TripCard;