
import React from 'react';
import ChatApp from './ChatApp';
import ChatCallBack from './ChatCallBack';
import ChatCallBack2 from './ChatCallBack2';
import CallBackChat from './CallBackChat';

import { Button } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';



class App extends React.Component {

	constructor(props) {
		super(props);
		this.state= {messages:[], onlineStatus:"Online" }
		this.handleMessage = this.handleMessage.bind(this);
		this._handleMessage=this._handleMessage.bind(this);
    this._showStatus=this._showStatus.bind(this)
	}

	render() {

		return (
				<div>
            <hr/>
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
                          </center>
                        </div>
                        <br/>
                        <div id="disp1"  style={{"overflow-y" : "scroll"}} >
                          <br/>
                          {this.state.messages && this.state.messages.map((message,idx)=>                                                                   
			   <div className={message.id=="1"? "speechStyle me" : "speechStyle1 you"}   
                                  key={idx} > 
                                    {message.onlineStatus}  {message.message}
                               </div>)}
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

