import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import "./advertise.css"
const Advertise = () => {
    return(
      <div className="container py-5">
           <div className="o-layout--4-col">
                     <div className="d-flex m-4 py-3">
                        <FontAwesomeIcon className="icon-cart pr-2" icon="home" size="3x" color=""/>
                         <div>
                         Home Shipping<br/>
                         Free for all order
                         </div>
                     </div>

                     <div className="d-flex m-4 py-3">
                        <FontAwesomeIcon className="icon-cart pr-2" icon="paper-plane" size="3x" color=""/>
                         <div>
                             100% Refund<br/>
                             Cash Back
                         </div>
                     </div>
                     <div className="d-flex m-4 py-3">
                         <FontAwesomeIcon className="icon-cart pr-2" icon="headset" size="3x" color=""/>
                         <div>
                             Clients'Support<br/>
                             Fast service
                         </div>
                     </div>
                     <div className="d-flex m-4 py-3">
                         <FontAwesomeIcon className="icon-cart pr-2" icon="rocket" size="3x" color=""/>
                         <div>
                             Fast Delivery<br/>
                             Best service
                         </div>
                     </div>
                   </div>
       </div>
    )
}
export default Advertise;
