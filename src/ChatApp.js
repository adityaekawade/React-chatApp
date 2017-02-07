/**
 * Created by adityaekawade on 12/15/16.
 */


import React from 'react';


/*class TodoItems extends React.Component {

}


class ChatApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = { txt: ["hey", "world"] };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.submitText = this.submitText.bind(this);


    }


    handleSubmit(e) {
        //this.setState({txt :e.target.value});
    }

    submitText(e) {
         let x = this.state.txt;

        x.push(
            {
                text: this._inputElement.value,
                //key: Date.now()
            }
        )

        this.setState({txt :x});

        this._inputElement.value = "";

        e.preventDefault();


        // let a = [];
         //a.push(x);

        //console.log(a);

      //  let z = a.map(y => y);
       // console.log(z);
    }


    render() {

        return (
            <div>
                Hey world!
                <hr/>
                <input type="text"  placeholder="Type a message.."  ref={(a) => this._inputElement = a}  onChange={this.handleSubmit} />
                {this.state.txt}
                <hr/>
                <button onClick={this.submitText}  >  Send </button>

            </div>
        );
    }

}*/



class TodoItems extends React.Component {
    render() {
        var todoEntries = this.props.entries;

        function createTasks(item) {
            return <li key={item.key}> {item.std} : {item.text}  </li>
        }

        var listItems = todoEntries.map(createTasks);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
};

//chat two starts


class ChatAppTwo extends React.Component {

    constructor(props) {
        super(props);

        this.state = { items: [] };
        this.addItemTwo = this.addItemTwo.bind(this);

    }


    addItemTwo(e) {
        var itemArray = this.state.items;

        itemArray.push(
            {
                text: this._inputElement.value,
                key: Date.now(),
                std: "student2"
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
                    <form onSubmit={this.addItemTwo}>
                        <input ref={(a) => this._inputElement = a}
                               placeholder="enter task">
                        </input>
                        <button type="submit">add</button>
                    </form>

                    <br/>


                </div>
                <TodoItems entries={this.state.items}/>
            </div>
        );
    }
};




// chat two ends



class StudentOne extends React.Component {
    render() {
        return(
           <div>
               <form onSubmit={this.props.addItem}>
                   <input ref={(a) => this._inputElement = a}
                          placeholder="enter Message">
                   </input>
                   <button type="submit">add</button>
               </form>
           </div>
        ) ;
    }
}

class ChatApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = { items: [] };

        this.addItem = this.addItem.bind(this);
        this.addItemTwo = this.addItemTwo.bind(this);



    }

    addItem(e) {
        var itemArray = this.state.items;

        itemArray.push(
            {
                text: this._inputElement.value,
                key: Date.now(),
                std: "student1"
            }
        );

        this.setState({
            items: itemArray
        });

        this._inputElement.value = "";

        e.preventDefault();
    }


    addItemTwo(e) {
        var itemArray = this.state.items;

        itemArray.push(
            {
                text: this._inputElement.value,
                key: Date.now(),
                std: "student2"
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
                               placeholder="enter Message">
                        </input>
                        <button type="submit">add</button>
                    </form>


                    <br/>
                    <ChatAppTwo />

                </div>
                <TodoItems entries={this.state.items}/>
            </div>
        );
    }
};



export default ChatApp;

