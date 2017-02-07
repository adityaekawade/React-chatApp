/**
 * Created by adityaekawade on 12/29/16.
 */

import React from 'react';


class Clock extends React.Component {

    constructor(props) {
        super(props); // ALWAYS required
        const currentTime = new Date();
        this.state = {
            hours: currentTime.getHours(),
            minutes: currentTime.getMinutes(),
            seconds: currentTime.getSeconds(),
            ampm: currentTime.getHours() >= 12 ? 'pm' : 'am'
        };
        this.updateClock = this.updateClock.bind(this);
        this.setTimer();
    }

    setTimer() {
        setTimeout(this.updateClock, 1000);
    }

    updateClock() {
        const currentTime = new Date();
        this.setState({
            hours: currentTime.getHours(),
            minutes: currentTime.getMinutes(),
            seconds: currentTime.getSeconds(),
            ampm: currentTime.getHours() >= 12 ? 'pm' : 'am'
        },this.setTimer);
    }

    render() {
        const {hours, minutes, seconds, ampm} = this.state;
        return (
            <div>
                <h1>
                { hours }:{
                minutes > 9 ? minutes : `0${minutes}`
            }:{
                seconds > 9 ? seconds : `0${seconds}`
            } {ampm}
                </h1>
            </div>
        )
    }
}

export default Clock;
