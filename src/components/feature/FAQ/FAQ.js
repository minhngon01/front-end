import React from 'react';
import './faq.css';
// import StarRating from "../../StarRating/StarRating";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';


class FAQ extends React.Component{
  render(){
    return(
     <div>
	   		<div className = "headline">
	   			<Link className="home-headline" to="/Home">Home</Link>
	   			<span className= "contact-headline">/ FAQ</span>
	   			<h3 className = "header-contacts"> FAQ </h3>
	   		</div>


      		<div className = "row-1">
      	 		<div className = "row-outer">
      	 			<div className = "row-inner">
      	 				<div className = "heading-faq">
      	 					<h2>Payment and delivery</h2>
      	 				</div>

      	 				<div className = "content-faq">
      	 					<ul className = "tab-list">
      	 						<li className= "tab-list-item"> 
      	 							<a href="#">
      	 								<span className ="tab-list-name">
											<b>Electronics & Computers</b>
      	 								</span>
      	 							</a>
      	 						</li>
      	 						<li className= "tab-list-item"> 
      	 							<a href="#">
      	 								<span className ="tab-list-name">
											<b>Home & Kitchen</b>
      	 								</span>
      	 							</a>
      	 						</li>
      	 						<li className= "tab-list-item"> 
      	 							<a href="#">
      	 								<span className ="tab-list-name">
											<b>Beauty and Health</b>
      	 								</span>
      	 							</a>
      	 						</li>
      	 						<li className= "tab-list-item"> 
      	 							<a href="#">
      	 								<span className ="tab-list-name">
											<b>Sports & Outdoors</b>
      	 								</span>
      	 							</a>
      	 						</li>
      	 					</ul>

      	 					<div className = "tab-wrap">
      	 						<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo em solo tempor incididunt ut labore et dolore magna aliqua. 
      	 						Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. 
      	 						Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. 
      	 						Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. 
      	 						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo em solo tempor incididunt ut labore et dolore magna aliqua.
      	 						Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. 
      	 						Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum</p>
      	 					</div>

      	 				</div>
      	 			</div>
      	 		</div>	
      		</div>

      		<br/>
      		<br/>
      		<br/>

      		<div className = "row-2">
      	 		<div className = "row-outer">
      	 			<div className = "row-inner">
      	 				<div className = "heading-faq">
      	 					<h2>Warranty and service</h2>
      	 				</div>

      	 				<div className = "content-faq">
      	 					<ul className = "tab-list">
      	 						<li className= "tab-list-item"> 
      	 							<a href="#">
      	 								<span className ="tab-list-name">
											<b>Electronics & Computers</b>
      	 								</span>
      	 							</a>
      	 						</li>
      	 						<li className= "tab-list-item"> 
      	 							<a href="#">
      	 								<span className ="tab-list-name">
											<b>Home & Kitchen</b>
      	 								</span>
      	 							</a>
      	 						</li>
      	 						<li className= "tab-list-item"> 
      	 							<a href="#">
      	 								<span className ="tab-list-name">
											<b>Beauty and Health</b>
      	 								</span>
      	 							</a>
      	 						</li>
      	 						<li className= "tab-list-item"> 
      	 							<a href="#">
      	 								<span className ="tab-list-name">
											<b>Sports & Outdoors</b>
      	 								</span>
      	 							</a>
      	 						</li>
      	 					</ul>

      	 					<div className = "tab-wrap">
      	 						<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo em solo tempor incididunt ut labore et dolore magna aliqua. 
      	 						Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. 
      	 						Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. 
      	 						Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. 
      	 						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo em solo tempor incididunt ut labore et dolore magna aliqua.
      	 						Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. 
      	 						Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum</p>
      	 					</div>

      	 				</div>
      	 			</div>
      	 		</div>	
      		</div>

      		<br/>
      		<br/>
      		<br/>

      		<div className = "row-3">
      	 		<div className = "row-outer">
      	 			<div className = "row-inner">
      	 				<div className = "heading-faq">
      	 					<h2>Questions and answers</h2>
      	 				</div>

      	 				<div className = "content-faq">
      	 					<ul className = "tab-list">
      	 						<li className= "tab-list-item"> 
      	 							<a href="#">
      	 								<span className ="tab-list-name">
											<b>Electronics & Computers</b>
      	 								</span>
      	 							</a>
      	 						</li>
      	 						<li className= "tab-list-item"> 
      	 							<a href="#">
      	 								<span className ="tab-list-name">
											<b>Home & Kitchen</b>
      	 								</span>
      	 							</a>
      	 						</li>
      	 						<li className= "tab-list-item"> 
      	 							<a href="#">
      	 								<span className ="tab-list-name">
											<b>Beauty and Health</b>
      	 								</span>
      	 							</a>
      	 						</li>
      	 						<li className= "tab-list-item"> 
      	 							<a href="#">
      	 								<span className ="tab-list-name">
											<b>Sports & Outdoors</b>
      	 								</span>
      	 							</a>
      	 						</li>
      	 					</ul>

      	 					<div className = "tab-wrap">
      	 						<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo em solo tempor incididunt ut labore et dolore magna aliqua. 
      	 						Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. 
      	 						Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. 
      	 						Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. 
      	 						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo em solo tempor incididunt ut labore et dolore magna aliqua.
      	 						Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. 
      	 						Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum</p>
      	 					</div>

      	 				</div>
      	 			</div>
      	 		</div>	
      		</div>
      		

      		<br/>
      		<br/>
      		<br/>


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

export default FAQ;
