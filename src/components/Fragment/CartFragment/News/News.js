import React,{Component} from 'react';
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
        <div className="c-news">
          <div className="c-news__news-image"  style={img}/>
          <div className="c-news__news-info">
            <div className="c-news__news-info-detail">
              <div className="c-news__news-info-detail-type">{news.type}</div>
              <div className="c-news__news-info-detail-title">{news.title}</div>
              <div className="c-news__news-info-detail-date">{news.date}</div>
            </div>
            <div className="c-news__news-info-detail-comments">
              <FontAwesomeIcon icon="heart"/>
              <p className="c-news__news-info-detail-comments__number-comments">{news.nohrt}</p>
              &nbsp;
              <FontAwesomeIcon icon="comments"/>
              <p className="c-news__news-info-detail-comments__number-comments">{news.nocmt}</p>
            </div>
          </div>
        </div>
);
}
export default News;
