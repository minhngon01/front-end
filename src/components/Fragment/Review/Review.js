import React from 'react';
import StarRating from '../../Fragment/StarRating/StarRating';

function Review(props){
  return(
        <div className="c-review__post d-flex flex-row">
          <div className="c-review__post__commentor-image"/>
          <div className="c-review__post__content-review-poster f-flex flex-column flex-grow-1">
            <div className="d-flex flex-row justify-content-between ">
              <div className="c-review__post__commentor-name">Phạm Thị Yến</div>
              <StarRating/>
            </div>
            <div className="c-review__post__date">October 12, 2017</div>
            <div className="c-review__post__content">ôi, Cái này đẹp thế !!!!</div>
          </div>
        </div>
  )
}

export default Review;
