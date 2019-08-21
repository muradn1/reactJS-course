import React, { Component } from 'react';
import { connect } from "react-redux";

function Rooms(props) {

    const onRoomsChange = (e) => {
        const rooms = e.target.value;
        props.dispatch({type:"update_rooms", val:rooms})
    }

    return (
        <div>
            <label>Enter number of rooms:</label>
            <input defaultValue={props.rooms} type="number" onInput={onRoomsChange} />
        </div>
    )

}

const mapState = state => ({
    rooms: state.rooms,
})

export default connect(mapState)(Rooms);