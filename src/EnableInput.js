/**
 * Created by adityaekawade on 12/29/16.
 */


import React from 'react';

class EnableInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputVisible:  false
        }

        this.showInput = this.showInput.bind(this);
    }


    showInput(e) {
        this.setState({inputVisible: !this.state.inputVisible })
    }

    render() {
        const {inputVisible} = this.state;
        return(
          <div>
              {inputVisible==false ? "" : <input type="text" placeholder="Input some random text"/> }
              <br/><br/>

              <button onClick={this.showInput}>Click</button>
          </div>
        );
    }
}


export default EnableInput;