import React from 'react';
import { Button } from 'react-bootstrap';

// for chat bubble - http://jsfiddle.net/thinkingstiff/mek5z/


class Chatbox extends React.Component {
	constructor(props) {
		super(props); 
		this.state = { txt: '' }; 

		this.handleSubmit = this.handleSubmit.bind(this); 
		this.submitText = this.submitText.bind(this); 
	}

	handleSubmit(e) {
		this.setState({txt :e.target.value});
		//document.getElementById('disp').innerHTML = e.target.value
	}

	submitText(e) {
		
		//document.getElementById('disp').innerHTML = this.state.txt;
		e.preventDefault();
		document.getElementById('input1').value = '';

		var newText = document.createTextNode(this.state.txt);

		//var para = document.getElementById("disp1");

		var p = document.createElement("p"); 
		p.className = "speechStyle you";

		p.appendChild(newText);
		 document.getElementById("disp1").appendChild(p);
		//this.setState({txt :e.target.value});
	}

	render() {
		return (
				<div>
						<div id="topBar"></div>
						<div id="disp1"  style={{"overflow-y" : "scroll"}} > 
							<div className="speechStyle me">Hello there!</div>
							<div className="speechStyle you">Hello. How are you?</div>
							<div className="speechStyle me">I am good.</div>
						</div>
						<input type="text" id="input1" placeholder="Type a message.."  value={this.state.txt}  onChange={this.handleSubmit} /> 
						<Button onClick={this.submitText} bsStyle="primary" bsSize="small"  >  Send </Button>
						
						

				</div>
		);
	}
}


export default Chatbox; 


