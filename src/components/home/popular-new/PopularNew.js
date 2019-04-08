import React,{Component} from 'react';
import "./popularnew.css";
import News from "../../Fragment/CartFragment/News/News";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class PopularNew extends Component{
  news = {
  "popular-news" : [
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
      },
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
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      customPaging: i => (
        <div
          style={{
            marginTop : "-420px",
            marginLeft : "450px",
            width: "10px",
            height:"10px",
            backgroundColor: "grey",
            border: "0px solid",
            borderRadius: "50%",
            position:"absolute",
            top:"0%"
          }}
        >
        </div>
      )
    };

    return(
      <div className="popular-new container my-5">
        <h1 className="my-5">Popular news</h1>
         <Slider {...settings}>
            {this.news['popular-news'].map(news => (<News news={news}/>))}
        </Slider>
      </div>
    )
  }
}
export default PopularNew
