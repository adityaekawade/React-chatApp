/**
 * Created by adityaekawade on 12/29/16.
 */


import React from 'react';
import ActivityItem from './ActivityItem';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activities: []
        }
    }

    render() {

        const {activities} = this.props;
        return(
            <div>
                {activities.map((activity) => ( <ActivityItem  activity={activity} />) )
                }
            </div>
        );
    }
}



export default Content;