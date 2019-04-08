import React,{Component} from 'react';
import "./cartnew.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const News =  (props) => {
  let news = props.news;
  let img = {
    backgroundImage: "url(" + news['image'] + ")",
    backgroundPosition: "center",
    backgroundRepeat  : "no-repeat",
    backgroundSize: "contain",
    height: "230px",
  };

  return(
        <div className="cart-news d-flex flex-column mr-5">
          <div className="img-news"  style={img}/>
          <div className="info-news">
            <div className="info-detail">
              <div className="type-news">{news.type}</div>
              <div className="title-news">{news.title}</div>
              <div className="date-news">{news.date}</div>
              <div className="content-news">{news.content}</div>
            </div>
            <div className="comment-news">
              <FontAwesomeIcon icon="heart"/>
              <p className="number-comments">{news.nohrt}</p>
              &nbsp;
              <FontAwesomeIcon icon="comments"/>
              <p className="number-comments">{news.nocmt}</p>
            </div>
          </div>
        </div>
);
}
export default News;
