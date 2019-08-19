import React, { Component } from 'react';

class Header extends Component {
    user = "moshe";
    render() {
        return (
            <div>
                Header work {this.user}
            </div>
        )
    }
}

export default Header;