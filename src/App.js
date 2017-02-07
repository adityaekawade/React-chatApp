
/*

import React from 'react';
import ReactDOM from 'react-dom';
import { WithContext as ReactTags } from 'react-tag-input';
import logo from './logo.svg';
import './App.css';

const App = React.createClass({
    getInitialState() {
        return {
            tags: [ {id: 1, text: "Apples"} ],
            suggestions: ["Banana", "Mango", "Pear", "Apricot"]
        }
    },
    handleDelete(i) {
        let tags = this.state.tags;
        tags.splice(i, 1);
        this.setState({tags: tags});
    },
    handleAddition(tag) {
        let tags = this.state.tags;
        tags.push({
            id: tags.length + 1,
            text: tag
        });
        this.setState({tags: tags});
    },
    handleDrag(tag, currPos, newPos) {
        let tags = this.state.tags;

        // mutate array
        tags.splice(currPos, 1);
        tags.splice(newPos, 0, tag);

        // re-render
        this.setState({ tags: tags });
    },
    handleSubmit(e) {
    	
    },


    render() {
        let tags = this.state.tags;
        let suggestions = this.state.suggestions;
        return (
            <div>
                <ReactTags tags={tags}
                    suggestions={suggestions}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag} />
                    <button type="submit" onSubmit = {this.handleSubmit} >Submit </button>

            </div>
        )
    }
});

export default App;

ReactDOM.render(<App />, document.getElementById('app'));





import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;





import React from 'react';
import ReactDOM from 'react-dom';
import { WithContext as ReactTags } from 'react-tag-input';
import logo from './logo.svg';
import './App.css';

const App = React.createClass({
    getInitialState() {
        return {
            tags: [ {id: 1, text: "Apples"} ],
            suggestions: ["Banana", "Mango", "Pear", "Apricot"]
        }
    },
    handleDelete(i) {
        let tags = this.state.tags;
        tags.splice(i, 1);
        this.setState({tags: tags});
    },
    handleAddition(tag) {
        let tags = this.state.tags;
        tags.push({
            id: tags.length + 1,
            text: tag
        });
        this.setState({tags: tags});
    },
    handleDrag(tag, currPos, newPos) {
        let tags = this.state.tags;

        // mutate array
        tags.splice(currPos, 1);
        tags.splice(newPos, 0, tag);

        // re-render
        this.setState({ tags: tags });
    },



    render() {
        let tags = this.state.tags;
        let suggestions = this.state.suggestions;
        return (
            <div>
                <ReactTags tags={tags}
                    suggestions={suggestions}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag} />

            </div>
        )
    }
});

export default App;

ReactDOM.render(<App />, document.getElementById('app'));



//slider
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
//import logo from './logo.svg';
//import './App.css';


class App extends Component {
	constructor(){
  		super(); 
  		this.state ={text: 0}
  		this.update = this.update.bind(this)
  	}

  	update(e) {
  		this.setState({text: ReactDOM.findDOMNode(this.refs.text).value})
  	} 
    render() {
	    return (
	    <div>
	    	
	    	<Slider ref="text" update={this.update} />
	    	{this.state.text}
	    	<hr/>
	    	
	    </div>
    );
  }
}

class Slider extends Component {
	render() {
		return (
	      <input type="range"
	      	min="0" max="255"
	        onChange={this.props.update} />
    	);
	}
 }



export default App;

//tags

import React from 'react';
import ReactDOM from 'react-dom';
import { WithContext as ReactTags } from 'react-tag-input';
import logo from './logo.svg';
import './App.css';

const App = React.createClass({
    getInitialState() {
        return {
            tags: [ {id: 1, text: "Apples"} ],
            suggestions: ["Banana", "Mango", "Pear", "Apricot"]
        }
    },
    handleDelete(i) {
        let tags = this.state.tags;
        tags.splice(i, 1);
        this.setState({tags: tags});
    },
    handleAddition(tag) {
        let tags = this.state.tags;
        tags.push({
            id: tags.length + 1,
            text: tag
        });
        this.setState({tags: tags});
    },
    handleDrag(tag, currPos, newPos) {
        let tags = this.state.tags;

        // mutate array
        tags.splice(currPos, 1);
        tags.splice(newPos, 0, tag);

        // re-render
        this.setState({ tags: tags });
    },
    handleSubmit(e) {
    	
    },


    render() {
        let tags = this.state.tags;
        let suggestions = this.state.suggestions;
        let x = tags.map(y => y.id); 
        let z = tags.map(y => y.text);

        return (
            <div>
                <ReactTags tags={tags}
                    suggestions={suggestions}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag} />
                    <button type="submit" onSubmit = {this.handleSubmit} >Submit </button>
                	<input type ="text" value={z} />

            </div>
        )
    }
});

export default App;



import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';

class App extends Component {
	constructor(props){
  		super(props);
  		this.launchClock(); 
  		this.state = {
			currentTime: (new Date()).toLocaleString() 
		}
  	}

launchClock() {
	setInterval (function() {
		console.log("updating time... "); 
		this.setState = ({(new Date()).toLocaleString()})
	}, 1000)
}

render() {
	console.log("rendering time... "); 
	return <div> {this.state.currentTime} </div>
}
}

export default App;




//component life cycle
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import {render} from 'react-dom';


class App extends Component {
	constructor(){
  		super(); 
  		this.state ={val: 0}
  		this.update = this.update.bind(this)
  	}

  	update(e) {
  		this.setState({val: this.state.val + 1 })
  	} 
  	componentWillMount() {
  		console.log('Mounting...'); 
  	}
    render() {
    	console.log('rendering...');
	    return (
	    <div>
	    	<button onClick={this.update}>{this.state.val}</button>
	    	
	    </div>
    );
  }
	  	componentDidMount() { 
	  		console.log('MOunted!');
	  	}
  	componentWillUnmount() { 
  		console.log('Unmounted!');
  	}
}


class Wrapper extends Component { 

	mount() {
		ReactDOM.render(  <App  />,document.getElementById('a') );

	}
	unmount() { 
		ReactDOM.unmountComponentAtNode(document.getElementById('a') );
	}
	render() {
		return (
			<div>
				<button onClick={this.mount.bind(this)}>Mount</button>
				<button onClick={this.unmount.bind(this)}>unMount</button>
				<div id="a"></div>
			</div>
		)
	}
}



export default Wrapper;



// clock timer 


var React = require('react');



var App = React.createClass({

    getInitialState: function(){
        return { elapsed: 0 };
    },

    componentDidMount: function(){

        this.timer = setInterval(this.tick, 50);
    },

    componentWillUnmount: function(){


        clearInterval(this.timer);
    },

    tick: function(){


        this.setState({elapsed: new Date() - this.props.start});
    },

    render: function() {
        
        var elapsed = Math.round(this.state.elapsed / 100);

        // This will give a number with one digit after the decimal dot (xx.x):
        var seconds = (elapsed / 10).toFixed(1);    

        // Although we return an entire <p> element, react will smartly update
        // only the changed parts, which contain the seconds variable.

        return <p>This example was started <b>{seconds} seconds</b> ago.</p>;
    }
});

export default App; 



import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';


class App extends Component {
	constructor(){
  		super(); 
  		this.state ={elapsed: 0}
  		//this.update = this.update.bind(this)
  	}

  	componentDidMount() { 
  		 this.timer = setInterval(this.tick, 50);
  	}

  	componentWillUnmount() { 
  		  clearInterval(this.timer);
  	}

  	tick() {
  		 this.setState({elapsed: new Date() - this.props.start});
  	}
  	

  	render() {
  		 var elapsed = Math.round(this.state.elapsed / 100);
  		  var seconds = (elapsed / 10).toFixed(1); 
  		return (
  			<div>
  			<b> app was started {seconds} ago </b>
  			</div>
  		)
  	}



}  	

export default App; 




*/


// Tweeter post box 

/*

import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { statusText: '' };


    this.setStatusText = this.setStatusText.bind(this);
    this.submitTweet = this.submitTweet.bind(this);
    this.statusTextValid = this.statusTextValid.bind(this);
  }


  setStatusText(event) {
    let text = event.target.value;
    this.setState({ statusText: text });
  }


  submitTweet() {
    if (this.statusTextValid()) {
      this.props.tweetSubmitted(this.state.statusText);
    }
  }


/*
  tweetSubmitted(lala) {
  	document.getElementById('disp').innerHTML = "dshxcjksdksdmxc";
  }
*/

/*
  statusTextValid() {
    return this.state.statusText.length > 0 && this.state.statusText <= 140;
  }


  render() {

return (<div>
        <TweetBoxStatus setStatusText={this.setStatusText} /> <br />
        <TweetBoxCounter statusText={this.state.statusText} /> &nbsp;
        <button className="btn btn-info" type="submit" onClick={this.submitTweet}>
        <span className="glyphicon glyphicon-retweet" aria-hidden="true"></span> &nbsp;Tweet</button>
      </div>);
    }
}


class TweetBoxStatus extends React.Component {
	render() {
		return (
			<textarea className="form-control" style={{"width" : "55%"}}onChange={this.props.setStatusText}
                placeholder="What's happening?" />
		); 
	}
}


class TweetBoxCounter extends React.Component {
  constructor(props) {
    super(props);
    this.counterStyles = this.counterStyles.bind(this);
    this.remainingCharacters = this.remainingCharacters.bind(this);
  }


  counterStyles() {
    let color = 'red';
    let remainingCharacters = this.remainingCharacters();
    if (remainingCharacters > 30) {
      color = 'green';
    } else if (remainingCharacters > 0) {


    color = 'yellow';
    }
    return { color: color };
  }


  remainingCharacters() {
    return 140 - this.props.statusText.length;
  }


  render() {
    return (
      <span style={this.counterStyles()}>{this.remainingCharacters()}</span>
    );
  }
}


export default App; 


//creditcard input 

import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {number: '' }; //Sets the initial state
		this.handleChange = this.handleChange.bind(this); //Binds the onChange handler to the constructor. This handler retrives the new value and stores it in state
		this.checkType = this.checkType.bind(this);
	}

	handleChange(e) { //handleChange is called
    let newValue = e.target.value; //Value that is typed in the input is stored in a new variable "newValue"
    let newNumber = this.filterWhitespace(newValue); //the newValue is passed to a function to filter the white spaces
    this.setState({ number: newNumber }); //Sets the new value for the state
    }

  	filterWhitespace(text) { //filters the while spaces from the text entered
    return text.replace(/\s/g, '');
    }

	process(number) {
		let type = this.checkType(number); //Number entered is passed to checkType method and stored in a new variable "type"
	    let text = this.insertSpaces(number); //Number entered is passed to insertSpaces method and stored in a new variable "text"
	    text = text.trim();
	    return { text: text, type: type };
	}

	insertSpaces(text) {
    return text.replace(/(.{4})/g, '$1 ');
   }

  	checkType(text) { 
	    let types = this.props.types;
	    for (var type in types) {
	      if (text.match(types[type])) {
	        return type;
	      }
	    }
	    return '';
    }

	render() {

		let { text: text, type: type } = this.process(this.state.number);
	    return (
	      <div>
	        <input type="text" value={text} onChange={this.handleChange} />
	        <input type="text" value={type} readOnly />
	      </div>
	    );
	}
}	


export default App; 





//react chat app
import React from 'react';
import Autosuggesting from './Autosuggesting';
import Chatbox from './Chatbox';
import StudentOne from './StudentOne';
//import TodoList from './TodoList';


import { Button } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


var allItems = []
allItems.push({"name":"Buy ingredients for Crock Pot"});
allItems.push({"name":"Lalalal"});

 
class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.addEvent = this.addEvent.bind(this);
    this.state = { allItems: [] }; 
  }

  render() {
    var items = this.props.items.map((item) => {
      return <li><TodoItem item={item.name} /></li>;
    })
    return(
      <div>
        <ul>{items}</ul>
        <p><NewTodoItem addEvent={this.addEvent} /></p>
      </div>
    );
  }
  addEvent(todoItem){
    allItems.push({"name":todoItem.newItem});
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
    React.findDOMNode(this.refs.itemName).focus();
  }
  render(){
    return (<form onSubmit={this.onSubmit}>
      <input ref="itemName" type="text" />
    </form>);
  }


    onSubmit(event){
    event.preventDefault();
    var input = React.findDOMNode(this.refs.itemName)
    var newItem = input.value;
    this.props.addEvent({ newItem });
    input.value = '';
  }
}
  
 


class App extends React.Component {


	render() {
			
		return (

				<div>						
					<TodoList items={allItems} />
				</div>
		);
	}
}


export default App; 




*/

import React from 'react';
//import InvoiceLineItems from './InvoiceLineItems';
import ChatApp from './ChatApp';
import ChatCallBack from './ChatCallBack';
import ChatCallBack2 from './ChatCallBack2';
import CallBackChat from './CallBackChat';

import { Button } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


//import ChatAppTwo from './ChatAppTwo';
import DisplayMessage from './DisplayMessage';
import Clock from './Clock';
import EnableInput from './EnableInput';
import Header from './Header';











class App extends React.Component {

	constructor(props) {
		super(props);
		//this.state = {txt: '', studentId:'', msg:[]};
		this.state= {messages:[], onlineStatus:"Online" }
		this.handleMessage = this.handleMessage.bind(this);
		this._handleMessage=this._handleMessage.bind(this);
        this._showStatus=this._showStatus.bind(this)
	}






	handleSubmit(value, stdId) {
		console.log("App" + value);
		this.setState ({txt: value, studentId: stdId });
	}

	handleMessage(message) {
		//console.log(message);

		//let a = message.map(y => y.txt);
		//console.log(a);

		this.setState({msg: message})
	}


	handleMessage1(message) {


		this.setState({msg: message})
	}



	render() {

		const abcde = {
			color : 'red',

		}







		return (
				<div>
                    <hr/>
					{/*<ChatCallBack handleMsg={this.handleMessage}  />
					<br/>
					<hr/>
					<ChatCallBack2 handleMsg={this.handleMessage1}  />
					<br/>
					{this.state.txt} - {this.state.studentId}
					<DisplayMessage disp={this.state.msg} />*/}

					<div className="container">
                        <div className="row">
                            <div className="col-md-5">
								Me (User 1)
								<br/>
                                <CallBackChat id="1" message={this._handleMessage} />
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-5">
								John Doe (User 2)
								<br/>
                                <CallBackChat id="2" message={this._handleMessage} onlineStatus={this._showStatus} />
                            </div>

                            <br/>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <div className="chatBox">
                                    <div id="topBar">
										<center style={{"color": "white",}}>
											John Doe
											<br/>
											<small>{this.state.onlineStatus}</small>

										</center></div>


                                    <br/>
                                    <div id="disp1"  style={{"overflow-y" : "scroll"}} >
                                        <br/>
                                        {this.state.messages &&
                                        this.state.messages.map((message,idx)=>

                                            <div className={message.id=="1"? "speechStyle me" : "speechStyle1 you"} key={idx} >{message.onlineStatus}
                                                {message.message}</div>
                                        )
                                        }
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-3"></div>

                        </div>

                    </div>



				</div>
		);
	}




    _showStatus(data) {
        let {onlineStatus} = data;
        this.setState({onlineStatus: onlineStatus})
    }
	_handleMessage(data){
		let {id,message, onlineStatus}=data;
		let messages=this.state.messages;
		messages.push({
			id:id,message:message,time:Date.now()
		})
		this.setState({
			messages:messages
		})
        this.setState({
            onlineStatus:onlineStatus
        })
	}
}

export default App; 

