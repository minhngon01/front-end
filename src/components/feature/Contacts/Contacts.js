import React,{Component} from 'react';
import './contacts.css';
import DetailInfoContact from "./detail-info-contact/DetailInfoContact";
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
    	<div className= "container">

  			<div className = "row-inner">
	   			<Link className="home-headline" to="/home">Home</Link>
	   			<span className= "contact-headline">/ Contacts</span>
	   			<h3 className = "header-contacts"> Contacts </h3>
 				</div>

	  	 	<div className="googlemap m-0 p-0" style={{ height: '500px', width: '100%' }}>
	      	<GoogleMapReact
		        bootstrapURLKeys={{ key:'AIzaSyD3OwF3E8PNB7baDWTQgFkUN8fsRF7GxgM' }}
		        defaultCenter={this.props.center}
		        defaultZoom={this.props.zoom} >
	        	<AnyReactComponent lat={59.955413} lng={30.337844}/>
	        </GoogleMapReact>
	    	</div>

				<DetailInfoContact/>

  		</div>
    )
  }
}

export default Contacts;
