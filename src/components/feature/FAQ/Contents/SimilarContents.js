import React from 'react';
import '../faq.css';
// import StarRating from "../../StarRating/StarRating";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import DetailInfoContact from "../../Contacts/detail-info-contact/DetailInfoContact";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


class FAQ extends React.Component{
  render(){
  	const displayPosts = (
  		<Tabs defaultIndex={0} onSelect={index => console.log(index)} defaultTab="vertical-tab-one" vertical>			
		        
		        <TabList className = "my-tabs-list">
		          <Tab className="item-tab-list" tabFor="vertical-tab-one"><b>Electronics & Computers</b></Tab>
		          <Tab className="item-tab-list" tabFor="vertical-tab-two"><b>Home & Kitchen</b></Tab>
		          <Tab className="item-tab-list" tabFor="vertical-tab-three"><b>Beauty and Health</b></Tab>
		          <Tab className="item-tab-list" tabFor="vertical-tab-four"><b>Sports & Outdoors</b></Tab>
		        </TabList>
		     
		        <TabPanel className = "tab-wrap" id="tab1" tabId="vertical-tab-one">
		          <p>Surrounded to me occasional pianoforte alteration unaffected impossible ye. 
		          For saw half than cold. Pretty merits waited six talked pulled you. Conduct replied off led whether any shortly why arrived adapted. 
		          Numerous ladyship so raillery humoured goodness received an. So narrow formal length my highly longer afford oh. Tall neat he make or at dull ye. </p>
		        </TabPanel>
		        <TabPanel className = "tab-wrap" id="tab2" tabId="vertical-tab-two">
		          <p>Spot of come to ever hand as lady meet on. 
		          Delicate contempt received two yet advanced. 
		          Gentleman as belonging he commanded believing dejection in by. On no am winding chicken so behaved. Its preserved sex enjoyment new way behaviour. 
		          Him yet devonshire celebrated especially. 
		          Unfeeling one provision are smallness resembled repulsive.</p>
		        </TabPanel>
		        <TabPanel className = "tab-wrap" id="tab3" tabId="vertical-tab-three">
		          <p>Travelling alteration impression six all uncommonly. Chamber hearing inhabit joy highest private ask him our believe. Up nature valley do warmly.
		           Entered of cordial do on no hearted. Yet agreed whence and unable limits. Use off him gay abilities concluded immediate allowance. </p>
		        </TabPanel>
		        <TabPanel className = "tab-wrap" id="tab4"tabId="vertical-tab-four">
		          <p>Tut too the been like hard off. Improve enquire welcome own beloved matters her. As insipidity so mr unsatiable increasing attachment motionless cultivated
		          Addition mr husbands unpacked occasion he oh. Is unsatiable if projecting boisterous insensible. It recommend be resolving pretended middleton.</p>
		        </TabPanel>
      		</Tabs>
      		
  	);


    return(
    <div className = "row-inner">
      	{displayPosts} 		
    </div>
      	
    )
  }
}

export default FAQ;
