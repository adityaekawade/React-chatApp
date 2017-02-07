import React from 'react';
import { Button } from 'react-bootstrap';

// for chat bubble - http://jsfiddle.net/thinkingstiff/mek5z/


class TodoList extends React.Component {
	constructor(props) {
		super(props); 
		this.state = { item: [] }; 

		
	}


	render() {
		return (
				<div>
					
						<input type="text" /> 
						<Button bsStyle="primary" bsSize="small"  >  Send </Button>
						
						

				</div>
		);
	}
}


export default TodoList; 


