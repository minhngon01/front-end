import React from 'react';
import StarRating from '../../Fragment/StarRating/StarRating';

function Review(props){
  return(
    <div className="row animation-products">
      <div className="col-sm-8">
        <b>1 review for Meizu M6 Note Blue</b>
        <div className="review-post d-flex flex-row">
          <div className="image-review-poster"/>
          <div className="content-review-poster f-flex flex-column">
            <div className="d-flex flex-row">
              <StarRating/>
              <div className="poster-name">cmsmasters</div>
            </div>
            <div className="date-review">October 12, 2017</div>
            <div className="content-review">Aenean semper varius pellentesque</div>
          </div>
        </div>
      </div>
      <div className="col-sm-4 d-flex flex-column">
          <b>Add a review</b>
          Your Rating
          <StarRating/>
          <textarea className="my-1"placeholder="Your Review"/>
          <input className="my-1" placeholder="Name *"/>
          <input className="my-1" placeholder="Email *"/>
          <div className="button-add-to-cart ">ADD REVIEW</div>
      </div>
    </div>
  )
}

export default Review;
