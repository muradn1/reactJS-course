import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserInfo extends Component {
    state = { user_obj: null }
    componentWillMount() {
        this.restApi();
    }

    restApi = (_amount = 10) => {
        let userId = this.props.match.params.id;
        console.log(userId)
        let myUrl = `https://randomuser.me/api/?results=${_amount}&seed=abc`;
        fetch(myUrl)
            .then(resp => resp.json())
            .then(data_json => {
                //console.log(data_json.results)
                let users_ar = []
                for (let item of data_json.results) {
                    users_ar[item.login.username] = item;
                }
                // data_json.results.map((item) => {
                //     users_ar[item.login.username] = item;
                // })
                
                this.setState({ user_obj: users_ar[userId] })
            })
    }

    render() {
        return (this.state.user_obj) ?
            (

                <div className="row justify-content-center text-center">
                    <div className="col-6">
                        <h2>{this.state.user_obj.name.first}</h2>
                        <img src={this.state.user_obj.picture.large} alt="blabla" />
                        <div>Tel:{this.state.user_obj.phone}</div>
                        <Link to="/">
                            <button className="btn btn-danger">back</button>
                        </Link>
                    </div>
                </div>
            ) :
            (
                <div></div>
            )

    }
}


export default UserInfo;