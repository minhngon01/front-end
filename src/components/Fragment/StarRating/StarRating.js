
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class StarRating extends React.Component  {
  constructor(props){
    super(props);
    this.state={
      star: "",
      submitted: false,
      color1:"DarkSlateGrey",
      color2:"DarkSlateGrey",
      color3:"DarkSlateGrey",
      color4:"DarkSlateGrey",
      color5:"DarkSlateGrey"
    };
    this.onHover1=this.onHover1.bind(this);
    this.onOut1=this.onOut1.bind(this);
    this.onHover2=this.onHover2.bind(this);
    this.onOut2=this.onOut2.bind(this);
    this.onHover3=this.onHover3.bind(this);
    this.onOut3=this.onOut3.bind(this);
    this.onHover4=this.onHover4.bind(this);
    this.onOut4=this.onOut4.bind(this);
    this.onHover5=this.onHover5.bind(this);
    this.onOut5=this.onOut5.bind(this);
    this.handleSubmit1=this.handleSubmit1.bind(this);
    this.handleSubmit2=this.handleSubmit2.bind(this);
    this.handleSubmit3=this.handleSubmit3.bind(this);
    this.handleSubmit4=this.handleSubmit4.bind(this);
    this.handleSubmit5=this.handleSubmit5.bind(this);
  }
  
  handleSubmit1() {  
    if(localStorage.getItem("checkLogin")==="false"){
      window.location.replace('/signin')
    }
    else{
    this.setState({
      color1:'yellow',
      submitted: true,
      star : 1
    })
  }
    
  }
  handleSubmit2() {
    if(localStorage.getItem("checkLogin")==="false"){
      window.location.replace('/signin')
    }
    else{
    this.setState({
      color1:'yellow',
      color2:'yellow',
      submitted: true,
      star : 2
    })
    }
  };
  handleSubmit3(){
    if(localStorage.getItem("checkLogin")==="false"){
      window.location.replace('/signin')
    }
    else{
      this.setState({
        color1:'yellow',
        color2:'yellow',
        color3:'yellow',
        submitted: true,
        star : 3
      })
    }
  }
   handleSubmit4(){
    if(localStorage.getItem("checkLogin")==="false"){
      window.location.replace('/signin')
    }
    else{
      this.setState({
        color1:'yellow',
        color2:'yellow',
        color3:'yellow',
        color4:'yellow',
        submitted: true,
        star : 4
      })
    }
  }
  handleSubmit5(){
    if(localStorage.getItem("checkLogin")==="false"){
      window.location.replace('/signin')
    }
    else{
      this.setState({
        color1:'yellow',
        color2:'yellow',
        color3:'yellow',
        color4:'yellow',
        color5:'yellow',
        submitted: true,
        star : 5
      })
    }
  }
  onHover1(){
    this.setState({
      color1:'yellow',
      submitted: false
    })
  }
  onHover2(){
    this.setState({
      color1:'yellow',
      color2:'yellow',
      submitted: false
    })
  }
  onHover3(){
    this.setState({
      color1:'yellow',
      color2:'yellow',
      color3:'yellow',
      submitted: false
    })
  }
  onHover4(){
    this.setState({
      color1:'yellow',
      color2:'yellow',
      color3:'yellow',
      color4:'yellow',
      submitted: false
    })
  }
  onHover5(){
    this.setState({
      color1:'yellow',
      color2:'yellow',
      color3:'yellow',
      color4:'yellow',
      color5:'yellow',
      submitted: false
    })
  }
  onOut1(){
    if (!this.state.submitted){
    this.setState({
      color1:'DarkSlateGrey',
      submitted: false
    })
  }
  }
  onOut2(){
    if (!this.state.submitted){
    this.setState({
      color1:'DarkSlateGrey',
      color2:'DarkSlateGrey',
      submitted: false
    })
  }
  }
  onOut3(){
    if (!this.state.submitted){
    this.setState({
      color1:'DarkSlateGrey',
      color2:'DarkSlateGrey',
      color3:'DarkSlateGrey',
      submitted: false
    })
  }
  }
  onOut4(){
    if (!this.state.submitted){
    this.setState({
      color1:'DarkSlateGrey',
      color2:'DarkSlateGrey',
      color3:'DarkSlateGrey',
      color4:'DarkSlateGrey',
      submitted: false
    })
  }
  }
  onOut5(){
    if (!this.state.submitted){
    this.setState({
      color1:'DarkSlateGrey',
      color2:'DarkSlateGrey',
      color3:'DarkSlateGrey',
      color4:'DarkSlateGrey',
      color5:'DarkSlateGrey',
      submitted: false
    })
  }
  }
  
  render() {
    return(
    
    <div className="rating-product" >
      <FontAwesomeIcon onClick={this.handleSubmit1} onMouseOver={this.onHover1}  onMouseOut={this.onOut1} className="icon-star" icon="star" color={this.state.color1} />
      <FontAwesomeIcon onClick={this.handleSubmit2} onMouseOver={this.onHover2}  onMouseOut={this.onOut2} className="icon-star" icon="star" color={this.state.color2} />
      <FontAwesomeIcon onClick={this.handleSubmit3} onMouseOver={this.onHover3}  onMouseOut={this.onOut3} className="icon-star" icon="star" color={this.state.color3} />
      <FontAwesomeIcon onClick={this.handleSubmit4} onMouseOver={this.onHover4}  onMouseOut={this.onOut4} className="icon-star" icon="star" color={this.state.color4} />
      <FontAwesomeIcon onClick={this.handleSubmit5} onMouseOver={this.onHover5}  onMouseOut={this.onOut5} className="icon-star" icon="star" color={this.state.color5} />
    </div>
    )
}
}
