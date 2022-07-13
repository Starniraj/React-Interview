import React from 'react';
import { Fragment,useState,useMemo } from 'react';

 function Memo(){

    const [val, setVal] = useState(0);
    const [item, setItem] = useState(1);

    const memohook = useMemo(function count(){
        console.log("MEMO HOOK :-)");
        return val+1;
    },[item]);

    return (
        <Fragment>
           <h1>UseMemo</h1>
           <h2>Value:{val} </h2>
           <h2>Items: {item}</h2>
           <h3>{memohook}</h3>
           <button onClick={()=>setVal(val+1)}>Click Me</button>
           <button onClick={()=>setItem(item*2)}>Click Me</button>
        </Fragment>
    )
}

export default Memo