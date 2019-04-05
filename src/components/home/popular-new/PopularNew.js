import React,{Component} from 'react';
import "./popularnew.css";
import News from "../../Fragment/CartFragment/News/News";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class PopularNew extends Component{
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
            <News/>
            <News/>
            <News/>
            <News/>
            <News/>
            <News/>
        </Slider>
      </div>
    )
  }
}
export default PopularNew
