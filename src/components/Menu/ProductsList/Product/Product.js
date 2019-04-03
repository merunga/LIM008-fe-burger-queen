import React from 'react';

const product = ( props ) => (
    <div>
        <h3>{props.label}</h3>
        <button> + </button>
        <button> - </button>
    </div>
);

export default product;