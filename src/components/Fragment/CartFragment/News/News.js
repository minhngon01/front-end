import React,{Component} from 'react';
import "./cartnew.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class News extends Component{
  render(){
    return(
        <div className="cart-news d-flex flex-column mr-5">
          <div className="img-news"/>
          <div className="info-news">
            <div className="info-detail">
              <div className="type-news">Hi-Tech</div>
              <div className="title-news">Dairy: Laptop technical detail</div>
              <div className="date-news">MARCH 20,2017</div>
            </div>
            <div className="comment-news">
              <FontAwesomeIcon icon="comments"/>
              <p className="number-comments">0</p>
            </div>
          </div>
        </div>
    )
  }
}
export default News;
