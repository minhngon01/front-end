import React,{Component} from 'react';
import "./popularnew.css";
import News from "../../Fragment/CartFragment/News/News";
import Slider from "react-slick";
import "../../../slick/slick.css";
import "../../../slick/slick-theme.css";

class PopularNew extends Component{
  render(){
    return(
      <div className="container">
        <h1>Popular news</h1>
        <div className="row">
          <div className="col-sm">
            <News/>
          </div>

          <div className="col-sm">
            <News/>
          </div>

          <div className="col-sm">
            <News/>
          </div>
        </div>
      </div>
    )
  }
}
export default PopularNew
