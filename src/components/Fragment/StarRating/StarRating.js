
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class StarRating extends React.Component  {
  constructor(props){
    super(props);
    this.state={
      star: "",
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
    this.setState({star : 1})
  }
  handleSubmit2() {
    this.setState({star : 2})
  };
  handleSubmit3(){
    this.setState({star : 3})
  }
   handleSubmit4(){
    this.setState({star : 4})
  }
  handleSubmit5(){
    this.setState({star : 5})
  }
  onHover1(){
    this.setState({
      color1:'yellow'
    })
  }
  onHover2(){
    this.setState({
      color1:'yellow',
      color2:'yellow'
    })
  }
  onHover3(){
    this.setState({
      color1:'yellow',
      color2:'yellow',
      color3:'yellow'
    })
  }
  onHover4(){
    this.setState({
      color1:'yellow',
      color2:'yellow',
      color3:'yellow',
      color4:'yellow'
    })
  }
  onHover5(){
    this.setState({
      color1:'yellow',
      color2:'yellow',
      color3:'yellow',
      color4:'yellow',
      color5:'yellow'
    })
  }
  onOut1(){
    this.setState({
      color:'DarkSlateGrey'
    })
  }
  onOut2(){
    this.setState({
      color1:'DarkSlateGrey',
      color2:'DarkSlateGrey'
    })
  }
  onOut3(){
    this.setState({
      color1:'DarkSlateGrey',
      color2:'DarkSlateGrey',
      color3:'DarkSlateGrey'
    })
  }
  onOut4(){
    this.setState({
      color1:'DarkSlateGrey',
      color2:'DarkSlateGrey',
      color3:'DarkSlateGrey',
      color4:'DarkSlateGrey'
    })
  }
  onOut5(){
    this.setState({
      color1:'DarkSlateGrey',
      color2:'DarkSlateGrey',
      color3:'DarkSlateGrey',
      color4:'DarkSlateGrey',
      color5:'DarkSlateGrey'
    })
  }
  
  render() {
    return(
    <div className="rating-product" >
      <FontAwesomeIcon onClick={this.handleSubmit1} onMouseOver={this.onHover1} onMouseOut={this.onOut1} className="icon-star" icon="star" color={this.state.color1} />
      <FontAwesomeIcon onClick={this.handleSubmit2} onMouseOver={this.onHover2} onMouseOut={this.onOut2} className="icon-star" icon="star" color={this.state.color2} />
      <FontAwesomeIcon onClick={this.handleSubmit3} onMouseOver={this.onHover3} onMouseOut={this.onOut3} className="icon-star" icon="star" color={this.state.color3} />
      <FontAwesomeIcon onClick={this.handleSubmit4} onMouseOver={this.onHover4} onMouseOut={this.onOut4} className="icon-star" icon="star" color={this.state.color4} />
      <FontAwesomeIcon onClick={this.handleSubmit5} onMouseOver={this.onHover5} onMouseOut={this.onOut5} className="icon-star" icon="star" color={this.state.color5} />
    </div>
    )
}
}
export default StarRating;
