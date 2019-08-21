import React, { Component } from 'react';
import { connect } from "react-redux";

class Counter extends Component {
    state = { counter: 0 };

    onPlusClick = () => {
        this.props.dispatch({type:"add"});
        // this.setState({ counter: this.state.counter + 1 });
    }

    onMinusClick = () => {
        this.props.dispatch({type:"dec"});
        // this.setState({ counter: this.state.counter - 1 });
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-5 text-center border">
                    <h1>Counter</h1>
                    <h2>{this.props.counter}</h2>
                    <button onClick={this.onPlusClick}>+</button>
                    <button onClick={this.onMinusClick}>-</button>
                </div>

            </div>
        )
    }
}

const mapState = state => ({
    counter: state.counter
})

export default connect(mapState)(Counter);