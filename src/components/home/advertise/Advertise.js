import React,{Component} from 'react';
import "./advertise.css"
class Advertise extends Component{
  render(){
    return(
      <div className="advertise mb-5">
        <div className="card bg-dark text-white" >
          <img className="advertise-img card-img"src="https://gearburn.com/wp-content/uploads/2018/09/apple-watch-series-4.jpg" alt="Card image"/>
          <div className="card-img-overlay p-5">
            <h1 className="card-title my-3">New collection<br/>Coming to town</h1>
            <p className="card-text my-4">Introducing fashionable & gorgeous watch<br/>From design to stylish</p>
            <button type="read-more button" className="btn btn-primary px-5 py-2 my-4 " >READ MORE</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Advertise;
