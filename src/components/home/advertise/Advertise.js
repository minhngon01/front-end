import React,{Component} from 'react';
class Advertise extends Component{
  render(){
    return(
      <div className="c-advertise mb-5">
          <div className="c-advertise__image"/>
          <div className="c-advertise__overlay">
            <h1 className="c-advertise__title">New collection</h1>
            <h1 className="c-advertise__title">Coming to town</h1>
            <p className="c-advertise__content">Introducing fashionable & gorgeous watch</p>
            <p className="c-advertise__content">From design to stylish</p>
            <button className="c-advertise__button" >READ MORE</button>
        </div>
      </div>
    )
  }
}
export default Advertise;
