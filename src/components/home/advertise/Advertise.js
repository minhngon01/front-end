import React,{Component} from 'react';
import "./advertise.css"
class Advertise extends Component{
  render(){
    return(
      <div className="advertise mb-5">
        <div className="card bg-dark text-white" >
          <img className="advertise-img card-img"src="https://gearburn.com/wp-content/uploads/2018/09/apple-watch-series-4.jpg" alt="Card image"/>
          <div className=" card-img-overlay d-flex flex-column justify-content-center align-items-start ml-5">
            <h1 className="title-advertise">New collection</h1>
            <h1>Coming to town</h1>
            <p className="">Introducing fashionable & gorgeous watch</p>
            <p className="">From design to stylish</p>
            <div className="button-readmore" >READ MORE</div>
          </div>
        </div>
      </div>
    )
  }
}
export default Advertise;
