import React, { Component } from 'react';

class Clock extends Component {
    state = {
        deadline: "2019-12-31"
      }
      
    render() {
        return (
            <div className="col-8 text-center border p-3">
                <h2>Countdown to: {this.state.deadline}</h2>
                <h3>Days: 2000</h3>
            </div>
        )
    }
}

export default Clock;