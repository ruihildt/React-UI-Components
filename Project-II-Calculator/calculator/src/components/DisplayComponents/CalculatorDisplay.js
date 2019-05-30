import React from 'react';
import './Display.css';

import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';


function CalculatorDisplay() {
    const actions = ['÷', '×', '−', '+', '=', 'clear'];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


    return ( 
        <div className="container">
            <div className="result">
                <p>0</p>
            </div>
            <div className="buttons">
                <div className="left-col">
                    <div>
                        <ActionButton actionProp={actions[5]}/>
                    </div>
                    <div className="digits">
                        <NumberButton numberProp={numbers[9]}/>
                        <NumberButton numberProp={numbers[8]}/>
                        <NumberButton numberProp={numbers[7]}/>
                        <NumberButton numberProp={numbers[6]}/>
                        <NumberButton numberProp={numbers[5]}/>
                        <NumberButton numberProp={numbers[4]}/>
                        <NumberButton numberProp={numbers[3]}/>
                        <NumberButton numberProp={numbers[2]}/>
                        <NumberButton numberProp={numbers[1]}/>
                    </div>
                    < div >
                        <NumberButton numberProp={numbers[0]}/>
                    </div>
                </div>
                <div className="right-col">
                    <ActionButton actionProp={actions[0]}/>
                    <ActionButton actionProp={actions[1]}/>
                    <ActionButton actionProp={actions[2]}/>
                    <ActionButton actionProp={actions[3]}/>
                    <ActionButton actionProp={actions[4]}/>
                </div>
            </div>
        </div>
    );
}

export default CalculatorDisplay;