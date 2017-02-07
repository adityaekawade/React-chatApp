/**
 * Created by adityaekawade on 1/20/17.
 */
/**
 * Created by adityaekawade on 1/19/17.
 */

import React from 'react';
import { Button } from 'react-bootstrap';



class CallBackChat extends React.Component {

    constructor() {
        super();
        this.state = { message: "", onlineStatus: "Online" };
        this._handleOnChange= this._handleOnChange.bind(this);
        this._handleOnClick= this._handleOnClick.bind(this);
    }

    _handleOnChange(e) {
        this.setState ({message: e.target.value, onlineStatus:"Typing..."})
        this.props.onlineStatus({onlineStatus:this.state.onlineStatus})

    }

    _handleOnClick(e) {
        //this.setState({onlineStatus: "Online"});
        this.props.message({
            id:this.props.id, message:this.state.message, onlineStatus: "Online"
        })
        this.setState({message:" ", onlineStatus: "Online"});

        e.preventDefault();
        this._newFunc();
    }


    _newFunc() {
        this.props.onlineStatus({onlineStatus:this.state.onlineStatus})
    }





    render() {
        return(
            <div>
                <form>
                    <div className="form-inline">
                        <input style={{"width" : "350px"}}  className="form-control" placeholder="Type a message.." type="text"  value={this.state.message}
                               onChange={this._handleOnChange} />
                        <button className="btn btn-default" onClick={this._handleOnClick}>
                            Send
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CallBackChat;