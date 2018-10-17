import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class MessageSent extends React.Component {
	render(){
		return(
			<div>
				<h3>Tu mensaje ha sido enviado...</h3>
    			<Link to={`/`} >
					<h2>Presione para regresar a Army of Makers</h2>
				</Link>
			</div>
		);
	}
}
export default withRouter(MessageSent);