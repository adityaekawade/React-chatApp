import React from 'react';
import { Button } from 'react-bootstrap';

// for chat bubble - http://jsfiddle.net/thinkingstiff/mek5z/


class StudentOne extends React.Component {


	constructor(props) {
		super(props); 
		this.state = { txt: [] }; 

		this.handleSubmit = this.handleSubmit.bind(this); 
		this.submitText = this.submitText.bind(this); 
	}

	handleSubmit(e) {
		this.setState({txt :e.target.value});
		//document.getElementById('disp').innerHTML = e.target.value
	}

	submitText(e) {
		this.props.pushData(
	    {student:1, text: this.text}
	  )
	  this.text="";

		//var a = [];
		//a.push(this.state.txt);
		//alert(this.state.txt);
		/*var y = this.state.txt;
		alert(typeof y);
		alert(a);
		alert(typeof a);
		alert(a.push(y));
		alert( typeof a.push(y));
		//document.getElementById('disp').innerHTML = this.state.txt;
		e.preventDefault();
		document.getElementById('input1').value = '';*/
 
		//var newText = document.createTextNode(this.state.txt);

		//var para = document.getElementById("disp1");

		//var p = document.createElement("p"); 
		//p.className = "speechStyle you";

		//p.appendChild(newText);
		 //document.getElementById("disp1").appendChild(p);
		//this.setState({txt :e.target.value});
	}

	render() {
		return (
				<div>
				this.props.data.map(
						
						<input type="text" id="input1" ref={i=>this.text=i} placeholder="Type a message.."  value={this.state.txt}  onChange={this.handleSubmit} /> 
						<Button onClick={this.submitText} bsStyle="primary" bsSize="small"  >  Send </Button>
						<p></p>
						{this.state.txt} 
						<p></p>
						
						
						)

				</div>
		);
	}
}


export default StudentOne; 


