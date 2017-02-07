/**
 * Created by adityaekawade on 12/29/16.
 */

import React from 'react'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            //whatis: ''
        }
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }





    handleChange(e) {
        this.setState ({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        //this.setState ({whatis: 'lallaa'});
        this.props.onSubmit(this.state.text)
    }



    render() {

        return (
            <div>
                <form >
                    <input type="text" onChange={this.handleChange} />
                    <button onClick={this.handleSubmit}> click</button>
                   
                </form>

            </div>
        )
    }






}

 Header.PropTypes = {
     onSubmit: React.PropTypes.func.isRequired
 }
export default Header;