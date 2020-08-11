import React from 'react';
import './style.scss';
const Form = ({ children }) => (
    <div>
        <form className="form">{children}</form>
    </div>
);

export default Form;
