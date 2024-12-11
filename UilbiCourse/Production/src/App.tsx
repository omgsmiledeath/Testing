import React from 'react';
import { CounterComponent } from './components/Counter';
import "./index.scss";

const App = () => {
    return (
        <div className='app'>
            Some component after this text.
            <CounterComponent />
        </div>
    );
};

export default App;