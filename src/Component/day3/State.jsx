import React,{ useState } from 'react';

const State = () => {

    const [inputValue, newChangeValue] = useState("Niraj");

    const onChange = (event) => {
        const newval = event.target.value;
        newChangeValue(newval)
    }
    return (
        <div>
        <h1>{inputValue}</h1>
        <input type="text" value= {inputValue} placeholder= "typesomething" onChange = {onChange} ></input>
        </div>
        
    )
}

export default State;