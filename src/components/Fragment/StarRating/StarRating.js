
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
  }

  handleSubmit1= _ => {
    if(localStorage.getItem("isLogin")==="false"){
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
  handleSubmit2= _ => {
    if(localStorage.getItem("isLogin")==="false"){
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
  handleSubmit3= _ =>{
    if(localStorage.getItem("isLogin")==="false"){
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
   handleSubmit4= _ =>{
    if(localStorage.getItem("isLogin")==="false"){
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
  handleSubmit5= _ =>{
    if(localStorage.getItem("isLogin")==="false"){
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
  onHover1= _ =>{
    this.setState({
      color1:'yellow',
      submitted: false
    })
  }
  onHover2= _ =>{
    this.setState({
      color1:'yellow',
      color2:'yellow',
      submitted: false
    })
  }
  onHover3= _ =>{
    this.setState({
      color1:'yellow',
      color2:'yellow',
      color3:'yellow',
      submitted: false
    })
  }
  onHover4= _ =>{
    this.setState({
      color1:'yellow',
      color2:'yellow',
      color3:'yellow',
      color4:'yellow',
      submitted: false
    })
  }
  onHover5= _ =>{
    this.setState({
      color1:'yellow',
      color2:'yellow',
      color3:'yellow',
      color4:'yellow',
      color5:'yellow',
      submitted: false
    })
  }
  onOut1= _ =>{
    if (!this.state.submitted){
    this.setState({
      color1:'DarkSlateGrey',
      submitted: false
    })
  }
  }
  onOut2= _ =>{
    if (!this.state.submitted){
    this.setState({
      color1:'DarkSlateGrey',
      color2:'DarkSlateGrey',
      submitted: false
    })
  }
  }
  onOut3= _ =>{
    if (!this.state.submitted){
    this.setState({
      color1:'DarkSlateGrey',
      color2:'DarkSlateGrey',
      color3:'DarkSlateGrey',
      submitted: false
    })
  }
  }
  onOut4= _ =>{
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
  onOut5= _ =>{
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

  render {
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
