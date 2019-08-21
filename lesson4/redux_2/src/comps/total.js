import React, { Component } from 'react';
import { connect } from "react-redux";

class Total extends Component {
    render() {
        let total = Math.ceil(this.props.people / this.props.rooms);
        return (
            <div>
                <h2>
                    Total People in 1 room: {total}
                </h2>
            </div>
        )
    }
}

const mapState = state => ({
    rooms: state.rooms,
    people: state.people
})

export default connect(mapState)(Total);