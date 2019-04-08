import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CountUp from 'react-countup';

function CountUpComponent(props){
  let contents = props.contents;
  return(
    <div className="d-flex flex-column align-items-center">
      <div className="icon">
        <FontAwesomeIcon className="pr-2" icon={contents.icon} size="3x" color="blue"/>
      </div>
      <div className="count-up">
        <CountUp end={contents.countNumber} duration={4} precision={1}/>
      </div>
      <div>
        <span class="cmsmasters_counter_subtitle">{contents.content}</span>
      </div>
    </div>
  );
}

export default CountUpComponent;
