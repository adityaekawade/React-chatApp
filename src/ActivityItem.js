/**
 * Created by adityaekawade on 12/29/16.
 */


import React from 'react';


class ActivityItem extends React.Component {
    render() {
        const {activity} = this.props;

        return(
          <div>
              <ul>
                  <li>
                      <p> {activity.txt} </p>
                       By: {activity.std}

                  </li>
              </ul>
          </div>
        );
    }
}

export default ActivityItem;