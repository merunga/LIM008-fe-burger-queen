import React from 'react';

const product = ( props ) => (
    <div>
        <div>
            <h3>{props.label}</h3>
            <p>/S {props.price}</p>
        </div>
        <button
        onClick={props.removed}> - </button>
        <button 
        onClick={props.added}> + </button>
    </div>
);

export default product; 