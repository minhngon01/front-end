import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import "./advertise.css"
class Advertise extends Component{
  render(){
    return(
      <div className="benefits container py-5">
           <table className="table table-bordered">
             <thead>
               <tr >
                 <td scope="col ">
                     <div className="d-flex m-4 py-3">
                        <FontAwesomeIcon className="icon-cart pr-2" icon="home" size="3x" color=""/>
                         <div>
                         Home Shipping<br/>
                         Free for all order
                         </div>
                     </div>
                   </td>
                 <td scope="col">
                     <div className="d-flex m-4 py-3">
                        <FontAwesomeIcon className="icon-cart pr-2" icon="paper-plane" size="3x" color=""/>
                         <div>
                             100% Refund<br/>
                             Cash Back
                         </div>
                     </div>
                   </td>
                 <td scope="col">
                     <div className="d-flex m-4 py-3">
                         <FontAwesomeIcon className="icon-cart pr-2" icon="headset" size="3x" color=""/>
                         <div>
                             Clients'Support<br/>
                             Fast service
                         </div>
                     </div>
                 </td>
                 <td scope="col">
                     <div className="d-flex m-4 py-3">
                         <FontAwesomeIcon className="icon-cart pr-2" icon="rocket" size="3x" color=""/>
                         <div>
                             Fast Delivery<br/>
                             Best service
                         </div>
                     </div>
                 </td>
               </tr>
             </thead>
           </table>
       </div>
    )
  }
}
export default Advertise;
