import React,{useState,useRef} from 'react';



/// hook of react 2019 
// אין קשר לרידקס עדיין

function CounterHooks(props){
        let [counter,setCounter] = useState(4)
        let myInput = useRef(null);

        let showInput = () => {
            console.log(myInput.current.value);    
        }

        return(
            <div>
                <h2>Counter: {counter}</h2>
                <button onClick={() => { setCounter(counter+1)} }>+</button>
                <button>-</button>
                <input ref={myInput} defaultValue="44" type="number" />
                <button onClick={showInput}>show input</button>
            </div>
        )
}


export default CounterHooks;