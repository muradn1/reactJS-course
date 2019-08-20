import React, { Component } from 'react';
import { MyContext } from "../data/context"


class Floor3 extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {
                    context => (
                        <div>
                            Floor3 work {context.data.counter}
                            <button onClick={context.add1}>add</button>
                            <button onClick={() => {context.addX(5)}}>add 5</button>
                        </div>
                    )

                }
            </MyContext.Consumer>
        )
    }
}

export default Floor3;