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
	   			<Link className="dropdown-item-modity" to="/Home">Home</Link>
	   			<span>/Contacts</span>
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
      	</div>
    )
  }
}

export default Contacts;
