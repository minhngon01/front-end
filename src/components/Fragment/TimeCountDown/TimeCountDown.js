import React from 'react';
import Countdown from 'react-countdown-now';

const renderer = ({ days ,hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return (<div> Finish </div>)
  } else {
    // Render a countdown
    return (
      <div className="d-flex flex-row justify-content-center">
        <div className="d-flex flex-column m-1">
          <p className="time-figure">{days}</p>
          <p className="time-word">DAY</p>
        </div>
        <div className="d-flex flex-column m-1">
          <p className="time-figure">{hours}</p>
          <p className="time-word">HRS</p>
        </div>
        <div className="d-flex flex-column m-1">
          <p className="time-figure">{minutes}</p>
          <p className="time-word">MIN</p>
        </div>
        <div className="d-flex flex-column m-1">
          <p className="time-figure">{seconds}</p>
          <p className="time-word">SEC</p>
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
