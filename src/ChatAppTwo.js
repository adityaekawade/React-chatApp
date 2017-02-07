/**
 * Created by adityaekawade on 12/27/16.
 */

import React from 'react';
import TodoItems from './ChatApp';




class ChatAppTwo extends React.Component {

    constructor(props) {
        super(props);

        this.state = { items: [] };

        this.addItem = this.addItem.bind(this);



    }

    addItem(e) {
        var itemArray = this.state.items;

        itemArray.push(
            {
                text: this._inputElement.value,
                //key: Date.now(),
                std: "student1"
            }
        );

        this.setState({
            items: itemArray
        });

        this._inputElement.value = "";

        e.preventDefault();
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                               placeholder="enter task">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}/>
            </div>
        );
    }
};



export default ChatAppTwo;

