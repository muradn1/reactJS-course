import React, { Component } from 'react';
import { connect } from "react-redux";

class Form extends Component {

    inputChanged = (e) => {
        const input = e.target.value;
        this.props.dispatch({type:"update_input", val:input});
    }

    sourceChanged = (e) => {
        const source = e.target.value;
        this.props.dispatch({ type: "update_source", val: source });
    }

    targetChanged = (e) => {
        const target = e.target.value;
        this.props.dispatch({ type: "update_target", val: target });
    }


    switchClicked = () => {
        this.props.dispatch({ type: "switch" });
    }

    render() {
        return (
            <div className="col-5 border" style={{ backgroundColor: "#aa66cc", minHeight: "500px" }}>
                <h2>configure converters</h2>

                <input className="mt-3" type="number" value={this.props.input} onChange={this.inputChanged}></input>

                <div className="mt-3">
                    <select value={this.props.convertKinds.source} onChange={this.sourceChanged}>
                        <option value="USD">USD</option>
                        <option value="ILS">ILS</option>
                        <option value="EUR">EUR</option>
                        <option value="BTC">BTC</option>
                    </select>
                </div>

                <button className="mt-3 btn btn-dark" onClick={this.switchClicked}>switch</button>

                <div className="mt-3">
                    <select value={this.props.convertKinds.target} onChange={this.targetChanged}>
                        <option value="USD">USD</option>
                        <option value="ILS">ILS</option>
                        <option value="EUR">EUR</option>
                        <option value="BTC">BTC</option>
                    </select>
                </div>
            </div>
        )
    }
}

const mapState = state => ({
    convertKinds: state.convertKinds,
    input: state.input  
})

export default connect(mapState)(Form);

