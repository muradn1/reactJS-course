import React, { Component } from 'react';

class UserInput extends Component {

    changeDateUser = () => {
        this.props.changeDate(this.refs.id_input.value)
    }

    render() {
        return (
            <div>
                <input ref={"id_input"} defaultValue="2050-06-05" type="date" />
                <button onClick={this.changeDateUser} className="btn btn-success">change</button>
            </div>
        )
    }
}

export default UserInput;