import React, { Component } from 'react';
import { connect } from "react-redux";


class Calculator extends Component {

    calc = () => {
        const source = this.props.convertKinds.source;
        const target = this.props.convertKinds.target;
        let input = this.props.input;

        if (source !== "USD") {
            input = input / this.props.quotes["USD" + source];
        }

        let result = this.props.quotes["USD" + target] * input;

        return result;
    }

    render() {
        return (
            <div className="col-7 border bg-info" style={{}}>
                <h2>Calculator work </h2>
                <h3>{this.props.convertKinds.source} to {this.props.convertKinds.target}</h3>
                <div className="container" style={{ backgroundColor: "white", minHeight: "200px", maxWidth: "300px" }}>
                    <p>the amount is: {this.props.input} {this.props.convertKinds.source}</p>
                    <p>you will get: {this.calc()} {this.props.convertKinds.target}</p>
                </div>
            </div>
        )
    }
}

const mapState = state => ({
    convertKinds: state.convertKinds,
    input: state.input,
    quotes: state.quotes
})

export default connect(mapState)(Calculator);