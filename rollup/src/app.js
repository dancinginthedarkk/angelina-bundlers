import React from 'react';
import icon from '../src/assests/rollup.svg'
import './index.css'

export const App = () => {
    return (
        <>
            <h1>Rollup</h1>
            <img className="image" src={icon} alt="rollup" />
        </>
    );
}