import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PeopleList extends Component {
    state = { user_ar: [] }

    componentDidMount() {
        this.restApi();
    }

    restApi = (_amount = 10) => {
        let myUrl = `https://randomuser.me/api/?results=${_amount}&seed=abc`;
        fetch(myUrl)
            .then(resp => resp.json())
            .then(data_json => {
                console.log(data_json.results)
                this.setState({ user_ar: data_json.results })
            })
    }

    changeAmount = () => {
        // console.log(this.refs.id_input.value)
        let amount = this.refs.id_input.value;
        this.restApi(amount);
    }

    render() {
        let _ar = this.state.user_ar;
        return (
            <React.Fragment>
                <label>Amounut of users: </label>
                <input onInput={this.changeAmount} ref={"id_input"} defaultValue="10" type="number" />
                <div className="row">
                    {_ar.map((item, i) => (
                        <div key={item.login.username} className="col-6 border p-2" onClick={this.userClicked}>
                            <Link to={"/user/" + item.login.username}>
                                <img className="float-left mr-2" src={item.picture.medium} alt={item.name.first} />
                            </Link>
                            <h3>{item.name.first + " " + item.name.last}</h3>
                            <div>Email:{item.email}</div>
                            <div>Age: {item.dob.age}</div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}


export default PeopleList;