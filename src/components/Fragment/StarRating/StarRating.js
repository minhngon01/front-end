
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StarRating = (props) => {
  
  return (
    <div className="card--basic__rating" >
      <FontAwesomeIcon className="icon-star" icon="star" color="DarkSlateGrey"/>
      <FontAwesomeIcon className="icon-star" icon="star" color="DarkSlateGrey"/>
      <FontAwesomeIcon className="icon-star" icon="star" color="DarkSlateGrey"/>
      <FontAwesomeIcon className="icon-star" icon="star" color="DarkSlateGrey"/>
      <FontAwesomeIcon className="icon-star" icon="star" color="DarkSlateGrey"/>
    </div>
  )
}
export default StarRating;
