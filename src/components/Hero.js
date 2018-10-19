import React from 'react';
import { Link } from 'react-router-dom';
const Hero = () => (
  <div className="hero">
		<Link to={'/'} >
			<img className="logo" src="./images/logo.png" alt="logo armyofmakers"/>
		</Link> 	
	  	
	  <section id="section01" class="demo">
 			 <a href="#section02"><i className="fas fa-chevron-down"></i></a>
		</section>

   </div>
)
// When the user scrolls down 20px from the top of the document, show the button

export default Hero;
