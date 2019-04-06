import React,{Component} from 'react';
import './contacts.css';
// import StarRating from "../../StarRating/StarRating";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GoogleMapReact from 'google-map-react';
import {Link} from 'react-router-dom';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


class Contacts extends React.Component{
	static defaultProps = {
	    center: {
	      lat: 59.95,
	      lng: 30.33
	    },
	    zoom: 11
	  };

  render(){
    return(
    	<div>
	   		<div className = "headline">
	   			<Link className="home-headline" to="../../../home/Home">Home</Link>
	   			<span className= "contact-headline">/ Contacts</span>
	   			<h3 className = "header-contacts"> Contacts </h3>
	   		</div>

	   		<hr/>

      		<div className = "row-1">
      	 		<div className="googlemap" style={{ height: '500px', width: '70%' }}>
        		<GoogleMapReact
		        	bootstrapURLKeys={{ key:  'AIzaSyD3OwF3E8PNB7baDWTQgFkUN8fsRF7GxgM' }}
		        	defaultCenter={this.props.center}
		        	defaultZoom={this.props.zoom}
		    	>
	        	<AnyReactComponent
	          		lat={59.955413}
	            	lng={30.337844}
	        	/>
	        	</GoogleMapReact>
	      		</div>
      		</div>

      		<br/>
      		<br/>

      		<div className = "row-outer">
      			<div className = "row-inner">
	      				<div className = "column-one-half">
	      					<div>
	      						<h2 className = "one-half-heading"> Did not find an answer to your question? </h2>
	      					</div>

	      					<div className = "contact-form">
	      						<div className = "name-form"> 
	      							<label>Name</label>
	      							<span className ="name-box">  
	      								<input className="contact-name"type="text" placeholder = "Your Name"/>
	      							</span>
	      						</div>

	      						<div className = "email-form">
	      							<label>Email</label>
	      							<span className ="name-box">  
	      								<input className="contact-email"type="text" placeholder = "Your Email..."/>
	      							</span>
	      						</div>

	      						<div className = "message-form">
	      							<label>Message</label>
	      							<span className ="message-box">  
	      								<textarea className="contact-message"type="text" placeholder = "Your Message"/>
	      							</span>
	      						</div>

	      						<div className = "send-message">
	      							<input type="submit" value="SEND MESSAGE" class="send-message-button"/>
	      						</div>
	      					</div>
	      				</div>


	      				<div className = "column-one-fourth">
	      					<div className="phone-number-contact-heading">
	      						<h2 className = "one-half-2-heading">Consultations and order by phone</h2>
	      					</div>

	      					<a> 093-153-6430 </a>
	      					<br/>
	      					<a> 1900-569-428 </a>
	      					<br/>
	      					<a> 1900-123-151 </a>
	      					<br/>
	      					<br/>
	      					<br/>
	      					<br/>
	      					<div>
								<h2 className = "one-half-2-heading">Contacts</h2>
								<span className="address"> 
									<span className = "address-left">Address: </span>
									<span className = "address-right">Brooklyn, NY 10036 </span>
								</span>

								<span className="phone"> 
									<span className = "phone-left">Phone: </span>
									<span className = "phone-right">+1003612312 </span>
								</span>

								<span className="city"> 
									<span className = "city-left">City: </span>
									<span className = "city-right">New York </span>
								</span>
	      					</div>

	      				</div>

	      				
	      			
	      		</div>
      		</div>
      	</div>
    )
  }
}

export default Contacts;
