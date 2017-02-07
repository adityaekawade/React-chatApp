/*import React from 'react';
import { Button } from 'react-bootstrap';


// for chat bubble - http://jsfiddle.net/thinkingstiff/mek5z/

class TodoItems extends React.Component {


	render() {

		const todoEntries = this.props.entries;

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



class TodoList extends React.Component {
	constructor(props) {
		super(props); 
		this.state = { item: [] }; 

		this.addItem = this.addItem.bind(this); 
		
	}


	addItem(e) {
		var itemArray = this.state.item; 

		itemArray.push(
			{
				text: this._inputElement.value,
            	key: Date.now()
			}
		);

		this.setState({items: itemArray});

		this._inputElement.value = "";

        e.preventDefault();

	}


	render() {
		return (
				<div>
					
						<input type="text" ref={(a) => this._inputElement = a} /> 
						<Button onClick={this.addItem} bsStyle="primary" bsSize="small"  >  Send </Button>
						<p></p>
						<TodoItems entries={this.state.items}/>
						
						

				</div>
		);
	}
}


export default TodoList; 


*/

import React from 'react';


 
class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.addEvent = this.addEvent.bind(this);
  }
  getInitialState() {
    return { allItems };
  }
  render() {
    var items = this.props.items.map((item) => {
      return <li><TodoItem item={item} /></li>;
    })
    return(
      <div>
        <ul>{items}</ul>
        <p><NewTodoItem addEvent={this.addEvent} /></p>
      </div>
    );
  }
  addEvent(todoItem){
    allItems.push(todoItem.newItem);
    this.setState({ allItems });
  }
}
 
class TodoItem extends React.Component {
  render(){
    return <div>{this.props.item}</div>;
  }
}
 
class NewTodoItem extends React.Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount(){
    ReactDOM.findDOMNode(this.refs.itemName).focus();
  }
  render(){
    return (<form onSubmit={this.onSubmit}>
      <input ref="itemName" type="text" />
    </form>);
  }
  onSubmit(event){
    event.preventDefault();
    var input = ReactDOM.findDOMNode(this.refs.itemName)
    var newItem = input.value;
    this.props.addEvent({ newItem });
    input.value = '';
  }
}


export default TodoList; 
