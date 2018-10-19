import React from 'react';
import { Link } from 'react-router-dom';
const Hero = () => (
  <div className="hero">
		<Link to={'/'} >
			<img className="logo" src="./images/logo.png" alt="logo armyofmakers"/>
		</Link> 	
	  	
	  <section id="section01" class="demo">
 			 <a href="#makers"><i className="fas fa-chevron-down"></i></a>
		</section>

   </div>
)

export default Hero;
