import React from 'react';
import './Display.css';


function CalculatorDisplay() {
    return ( 
        <div className="container">
            <div className="result"></div>
            <div className="buttons">
                <div className="left-col"></div>
                <div className="right-col"></div>
            </div>
        </div>
    );
}

export default CalculatorDisplay;