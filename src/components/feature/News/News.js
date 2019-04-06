import React,{Component} from 'react';
import './news.css';
// import StarRating from "../../StarRating/StarRating";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import New from "../../Fragment/CartFragment/News/News";
import {Link} from 'react-router-dom';

class News extends Component{
  news = {
  "col-1" : [
      {
        'image' : 'https://devicer.cmsmasters.net/wp-content/uploads/2017/09/11-2-540x540.jpg',
        'type'  : 'Business',
        'date'  : 'March 07, 2019',
        'title' : 'Free set of smartphone clay mockups',
        'nocmt' : '10',
        'nohrt' : '5'
      },
      {
        'image' : 'https://devicer.cmsmasters.net/wp-content/uploads/2017/06/blog6-2.jpg',
        'type'  : 'Business',
        'date'  : 'April 01, 2019',
        'title' : 'The best products at your fingertips',
        'nocmt' : '1',
        'nohrt' : '5'
      }
    ],
    "col-2" : [
      {
        'image' : 'https://devicer.cmsmasters.net/wp-content/uploads/2017/03/blog4-2.jpg',
        'type'  : 'Hi-tech',
        'date'  : 'October 10, 2018',
        'title' : 'Laptop technical detail',
        'nocmt' : '2',
        'nohrt' : '6'
      },
      {
        'image' : 'https://devicer.cmsmasters.net/wp-content/uploads/2017/09/12-2-540x540.jpg',
        'type'  : 'Business',
        'date'  : 'January 10, 2019',
        'title' : 'The free smartphone everyday',
        'nocmt' : '3',
        'nohrt' : '5'
      }
    ],
    "col-3" : [
      {
        'image' : 'https://devicer.cmsmasters.net/wp-content/uploads/2017/06/blog5-2.jpg',
        'type'  : 'Hi-tech',
        'date'  : 'January 12, 2019',
        'title' : 'Best care and support at Our Stores',
        'nocmt' : '9',
        'nohrt' : '6'
      },
       {
        'image' : 'https://devicer.cmsmasters.net/wp-content/uploads/2017/06/blog5-2.jpg',
        'type'  : 'Hi-tech',
        'date'  : 'January 12, 2019',
        'title' : 'Best care and support at Our Stores',
        'nocmt' : '9',
        'nohrt' : '6'
      }
    ]
  }
  render(){
    return(

      <div className="row-outer">
        <div className="row-inner">
          <div className = "headline">
            <Link className="home-headline" to="/Home">Home</Link>
            <span className= "contact-headline">/ News</span>
            <h3 className = "header-contacts"> News </h3>
          </div>

          <div className="abc">
            <div className = "post-article">
              {this.news['col-1'].map(news => (<New news={news}/>))}
            </div>
          </div>

          <div className="abc">
            <div className = "post-article">
              {this.news['col-2'].map(news => (<New news={news}/>))}
            </div>
          </div>

          <div className="abc">
            <div className = "post-article">
              {this.news['col-3'].map(news => (<New news={news}/>))}
            </div>
          </div>


        </div>
        <br/>
    </div>
    )
  }
}
export default News

