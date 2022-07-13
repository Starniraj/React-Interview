import { useState, useRef } from "react";

const Reference = () => {

    const refElement = useRef("");
    const [name, setName] = useState("Niraj")

    const handleInput = ()=> {
        setName("Singh");
        refElement.current.style.color= "red"

    }
    return (
        <div>
            <input ref={refElement} value= {name} type="text"  placeholder = "typesomething"/>
            <button onClick={handleInput}>Change</button>
        </div>
    )
}

export default Reference;