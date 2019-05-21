import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

export default class StarRating extends React.Component  {
  constructor(props){
    super(props);
    this.state={
      star : this.props.star,
      submitted: false,
      color1:"DarkSlateGrey",
      color2:"DarkSlateGrey",
      color3:"DarkSlateGrey",
      color4:"DarkSlateGrey",
      color5:"DarkSlateGrey",
      user : localStorage.getItem('user_id')
    };
  }
   componentDidMount(){
     if (this.state.star == 1){
       this.setState({
         color1 : '#FFED00',
         submitted : true
       })
     }
     if (this.state.star == 2){
      this.setState({
        color1 : '#FFED00',
        color2 : '#FFED00',
        submitted : true
      })
    }
    if (this.state.star == 3){
      this.setState({
        color1 : '#FFED00',
        color2 : '#FFED00',
        color3 : '#FFED00',
        submitted : true
      })
    }
    if (this.state.star == 4){
      this.setState({
        color1 : '#FFED00',
        color2 : '#FFED00',
        color3 : '#FFED00',
        color4 : '#FFED00',
        submitted : true
      })
    }
    if (this.state.star == 5){
      this.setState({
        color1 : '#FFED00',
        color2 : '#FFED00',
        color3 : '#FFED00',
        color4 : '#FFED00',
        color5 : '#FFED00',
        submitted : true
      })
    }
   }
  handleSubmit1= _ => {

    if (this.state.submitted == true){
      this.setState({
        color2:"DarkSlateGrey",
      color3:"DarkSlateGrey",
      color4:"DarkSlateGrey",
      color5:"DarkSlateGrey"
      })
    }
    if(!localStorage.getItem("isLogin")){
      window.location.replace('/signin')
    }
    else{
    this.setState({
      color1:'#FFED00',
      submitted: true
    })

    axios({
      method: 'post',
      url : 'http://localhost:3003/rating/star',
      data : {
        user_id : this.state.user ,
        product_id : this.props.product_id,
        product_rating : 1,
      }

    })
  }

  }
  handleSubmit2= _ => {

    if (this.state.submitted == true){
      this.setState({
      color3:"DarkSlateGrey",
      color4:"DarkSlateGrey",
      color5:"DarkSlateGrey"
      })
    }
    if(!localStorage.getItem("isLogin")){
      window.location.replace('/signin')
    }
    else{
    this.setState({
      color1:'#FFED00',
      color2:'#FFED00',
      submitted: true
    })

    axios({
      method: 'post',
      url : 'http://localhost:3003/rating/star',
      data : {
        user_id : localStorage.getItem('user_id') ,
        product_id : this.props.product_id,
        product_rating : 2,
      }

    })
    }
  };
  handleSubmit3= _ =>{

    if (this.state.submitted == true){
      this.setState({
      color4:"DarkSlateGrey",
      color5:"DarkSlateGrey"
      })
    }
    if(!localStorage.getItem("isLogin")){
      window.location.replace('/signin')
    }
    else{
      this.setState({
        color1:'#FFED00',
        color2:'#FFED00',
        color3:'#FFED00',
        submitted: true
      })

      axios({
        method: 'post',
        url : 'http://localhost:3003/rating/star',
        data : {
          user_id : localStorage.getItem('user_id') ,
          product_id : this.props.product_id,
          product_rating : 3,
        }
      })
    }
  }
   handleSubmit4= _ =>{

    if (this.state.submitted == true){
      this.setState({
      color5:"DarkSlateGrey"
      })
    }
    if(!localStorage.getItem("isLogin")){
      window.location.replace('/signin')
    }
    else{
      this.setState({
        color1:'#FFED00',
        color2:'#FFED00',
        color3:'#FFED00',
        color4:'#FFED00',
        submitted: true
      })

      axios({
        method: 'post',
        url : 'http://localhost:3003/rating/star',
        data : {
          user_id : localStorage.getItem('user_id') ,
          product_id : this.props.product_id,
          product_rating : 4,
        }
      })
    }
  }
  handleSubmit5= _ =>{

    if(!localStorage.getItem("isLogin")){
      window.location.replace('/signin')
    }
    else{
      this.setState({
        color1:'#FFED00',
        color2:'#FFED00',
        color3:'#FFED00',
        color4:'#FFED00',
        color5:'#FFED00',
        submitted: true
      })

      axios({
        method: 'post',
        url : 'http://localhost:3003/rating/star',
        data : {
          user_id : localStorage.getItem('user_id') ,
          product_id : this.props.product_id,
          product_rating : 5,
        }
      })
    }
  }
  onHover1= _ =>{
    if (!this.state.submitted){
    this.setState({
      color1:'#FFED00'
    })
  }
  }
  onHover2= _ =>{
    if (!this.state.submitted){
    this.setState({
      color1:'#FFED00',
      color2:'#FFED00'
    })
  }
  }
  onHover3= _ =>{
    if (!this.state.submitted){
    this.setState({
      color1:'#FFED00',
      color2:'#FFED00',
      color3:'#FFED00'
    })
  }
  }
  onHover4= _ =>{
    if (!this.state.submitted){
    this.setState({
      color1:'#FFED00',
      color2:'#FFED00',
      color3:'#FFED00',
      color4:'#FFED00'
    })
  }
  }
  onHover5= _ =>{
    if (!this.state.submitted){
    this.setState({
      color1:'#FFED00',
      color2:'#FFED00',
      color3:'#FFED00',
      color4:'#FFED00',
      color5:'#FFED00'
    })
  }
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

  render (){
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
