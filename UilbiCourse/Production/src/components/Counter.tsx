import React, { useEffect, useState } from 'react';
import * as classes from "./Counter.module.scss";

export const CounterComponent = () => {
    const [count,setCount] = useState(0);
    useEffect(()=>{ 
    }, [count])

    return (<div className={classes.main}>
        <div onClick={() => setCount(count+1)}>
            Click me!
        </div>
        <div>{count}</div>
        </div>
    );
};