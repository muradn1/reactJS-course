// statless Component
import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
//redux 2019
function CounterRedux(props){
        let counter = useSelector(state => state.counter)
        let dispatch = useDispatch()

        return(
            <div>
                <div>
                <h2>Counter redux 2019:  {counter} </h2>
                <button onClick={() => { dispatch({type:"add"}) } }>+</button>
                <button>-</button>
            </div>
            </div>
        )
}


export default CounterRedux;