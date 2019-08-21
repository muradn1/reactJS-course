import React, { Component } from 'react';
import { connect } from "react-redux";

function People(props) {
    const onPeopleChange = (e) =>{
        const people = e.target.value;
        props.dispatch({type:"update_people",val:people})
    }

    return (
        <div>
            <label>Enter number of people:</label>
            <input defaultValue={props.people} type="number" onInput={onPeopleChange} />
        </div>
    )
}

const mapState = state => ({
    people: state.people
})

export default connect(mapState)(People);