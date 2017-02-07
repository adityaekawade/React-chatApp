import React from 'react';
import { Button } from 'react-bootstrap';


class TodoItems extends React.Component {


	render() {

		var todoEntries = this.props.entries;

        function createTasks(item) {
          return <li key={item.key}>{item.text}</li>
        }

        var listItems = todoEntries.map(createTasks);

		
		return (
				<div>
					<ul className="theList">
			            {listItems}
			        </ul>
				</div>
		);
	}
}

export default TodoItems; 
