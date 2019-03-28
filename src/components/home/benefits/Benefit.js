import React,{Component} from 'react';
// import "./advertise.css"
class Advertise extends Component{
  render(){
    return(
      <div className="benefits container py-5">
           <table className="table table-bordered">
             <thead>
               <tr >
                 <td scope="col ">
                     <div className="d-flex m-4 py-4">
                         <i className="fas fa-home fa-3x pr-4"></i>
                         <div>
                         Home Shipping<br/>
                         Free for all order
                         </div>
                     </div>
                   </td>
                 <td scope="col">
                     <div className="d-flex m-4 py-4">
                         <i className="far fa-paper-plane fa-3x pr-4 "></i>
                         <div>
                             100% Refund<br/>
                             Cash Back
                         </div>
                     </div>
                   </td>
                 <td scope="col">
                     <div className="d-flex m-4 py-4">
                         <i className="fas fa-headset fa-3x pr-4"></i>
                         <div>
                             Clients'Support<br/>
                             Fast service
                         </div>
                     </div>
                 </td>
                 <td scope="col">
                     <div className="d-flex m-4 py-4">
                         <i className="fas fa-rocket fa-3x pr-4"></i>
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
