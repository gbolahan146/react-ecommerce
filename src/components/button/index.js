import React from 'react';
import './style.scss';
const Button = ({ type, placeholder }) => (
    <div>
        <button className="btn" type={type}>
            {placeholder}
        </button>
    </div>
);

export default Button;