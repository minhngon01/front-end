import React from 'react';
import './faq.css';
// import StarRating from "../../StarRating/StarRating";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import DetailInfoContact from "../Contacts/detail-info-contact/DetailInfoContact";
import SimilarContent from "./Contents/SimilarContents"


class FAQ extends React.Component{

	
  render(){
    return(
     <div>
     		
     		<div className = "row-inner">
		   		<div className = "headline">
		   			<Link className="home-headline" to="/Home">Home</Link>
		   			<span className= "contact-headline">/ FAQ</span>
		   			<h3 className = "header-contacts"> FAQ </h3>
		   		</div>
	   		</div>


      		<div>
      	 			<div className = "row-inner">
      	 				<div className = "heading-faq">
      	 					<h2>Payment and delivery</h2>
      	 				</div>

      	 			<SimilarContent/>	
      	 			</div>
      		
      		</div>

      		<br/>
      		<br/>
      	

      		<div>
      	 		<div className = "row-outer">
      	 			<div className = "row-inner">
      	 				<div className = "heading-faq">
      	 					<h2>Warranty and service</h2>
      	 				</div>

      	 				<SimilarContent/>
      	 			</div>
      	 		</div>	
      		</div>

      		<br/>
      		<br/>																

      		<div>
      	 		<div className = "row-outer">
      	 			<div className = "row-inner">
      	 				<div className = "heading-faq">
      	 					<h2>Questions and answers</h2>
      	 				</div>

      	 				<SimilarContent/>
      	 			</div>

      	 			<div className = "row-inner">
      	 				<DetailInfoContact/>
      	 			</div>
      	 		</div>	
      		</div>
      		

      	

      		<div>
      			
      		</div>
      		</div>
      	
    )
  }
}

export default FAQ;
