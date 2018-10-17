import React from 'react';
import { Link } from 'react-router-dom';
const Hero = () => (
  <div className="hero">
    <header>
    		<Link to={`/`} >
				<img src="images/logo.png" alt="logo armyofmakers"/>
			</Link>
	</header>
  </div>
)

export default Hero;