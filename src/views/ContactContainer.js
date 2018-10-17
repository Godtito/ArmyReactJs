import React from 'react';
import Makers from '../data.js';
import { Link } from 'react-router-dom';

const ContactContainer = () => (
	<div>
		<form method="post" action="mailto:jesucristo001@hotmail.com,mailto:another@gmail.com">
			<label for="nombre">Nombre:</label><input type="text" name="nombre" id="nombre"/><br/>
			<label for="email">Email:</label><input type="text" name="nombre" id="email"/><br/>
			<p>Describe tu idea: </p>
			<textarea id="opinion" name="opinion"></textarea><br/>
			<Link to={`/MessageSent`} >
				<input type="submit" name="Submit" value="Enviar"/>  
			</Link>
		</form>
	</div>
)
export default ContactContainer;