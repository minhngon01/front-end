import React from 'react';
import Countdown from 'react-countdown-now';

const renderer = ({ days ,hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return (<div> Finish </div>)
  } else {
    // Render a countdown
    return (
      <div className="c-card--sale__time">
        <div className="c-card--sale__time-part">
          <p className="c-card--sale__time-part-number">{days}</p>
          <p className="c-card--sale__time-part-word">DAY</p>
        </div>
        <div className="c-card--sale__time-part">
          <p className="c-card--sale__time-part-number">{hours}</p>
          <p className="c-card--sale__time-part-word">HRS</p>
        </div>
        <div className="c-card--sale__time-part">
          <p className="c-card--sale__time-part-number">{minutes}</p>
          <p className="c-card--sale__time-part-word">MIN</p>
        </div>
        <div className="c-card--sale__time-part">
          <p className="c-card--sale__time-part-number">{seconds}</p>
          <p className="c-card--sale__time-part-word">SEC</p>
        </div>
      </div>
    )
    ;
  }
};

class TimeCountDown extends React.Component{
  constructor(props){
    super(props);
    console.log(Date() + (new Date(this.props.time)));
  }
  render(){
    return(
      <div>
      <Countdown
       date={new Date(this.props.time)}
       intervalDelay={0}
       precision={3}
       renderer={renderer}
     />
     </div>
    )
  }
}
export default TimeCountDown;
