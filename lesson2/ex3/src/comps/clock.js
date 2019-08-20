import React, { Component } from 'react';

class Clock extends Component {
    state = {days:10}
    
    //hooks life cycle
    componentWillMount(){
        this.changeDays(this.props.time);
    }

    componentWillReceiveProps(_newProps){
        this.changeDays(_newProps.time);
    }


    changeDays = (_newDate)=>{
        let time = Date.parse(_newDate) - Date.parse(new Date());
        let _days = Math.floor(time/1000/60/60/24);
        this.setState({days:_days})
    }

    render() {
        return (
            <div className="col-8 text-center border p-3">
                <h2>Countdown to: {this.props.time}</h2>
                <h3>Days: {this.state.days}</h3>
            </div>
        )
    }
}

export default Clock;