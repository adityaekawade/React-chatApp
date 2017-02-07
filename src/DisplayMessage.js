/**
 * Created by adityaekawade on 1/20/17.
 */


import React from 'react';
import ActivityItem from './ActivityItem';

class DisplayMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activities: []
        }
    }

    render() {

        const {disp} = this.props;
        return(
            <div>
                {disp.map((activity) => ( <ActivityItem  activity={activity} />) )
                }
            </div>
        );
    }
}



export default DisplayMessage;