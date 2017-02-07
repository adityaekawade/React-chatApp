/**
 * Created by adityaekawade on 1/20/17.
 */
/**
 * Created by adityaekawade on 1/19/17.
 */

import React from 'react';


class ChatCallBack2 extends React.Component {

    constructor() {
        super();
        this.state = { txt: [] };
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleMessage= this.handleMessage.bind(this);
    }

    handleSubmit(){
        this.props.recordingStarted(this.state.txt, this.state.studentId);
    }

    handleMessage(e) {
        var messageArray = this.state.txt;
        messageArray.push(
            {
                txt: this._inputElement.value,
                std: "Student2"
            }
        );
        this.setState ({txt: messageArray});

        this.props.handleMsg(this.state.txt);

        this._inputElement.value ="";
        e.preventDefault();
    }

    render() {
        return(
            <div>
                {/*<button onClick={this.handleSubmit}>Record</button>*/}
                <form onSubmit={this.handleMessage}>
                    <input type="text" ref={(a) => this._inputElement = a} placeholder="Enter your message"/>
                    <button type="submit">Send Message</button>
                </form>


            </div>
        );
    }
}

export default ChatCallBack2;