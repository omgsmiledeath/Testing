import React, { useEffect, useState } from 'react';
import "./Counter.scss"

export const CounterComponent = () => {
    const [count,setCount] = useState(0);
    useEffect(()=>{ 
    }, [count])

    return (<div className='counterStyle'>
        <div onClick={() => setCount(count+1)}>
            Click me!
        </div>
        <div>{count}</div>
        </div>
    );
};