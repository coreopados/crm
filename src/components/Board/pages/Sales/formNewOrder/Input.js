import React from 'react';
import '../../../../../App.css';


const Input = (props) => {

    return (
        <div className="form-group">
            <input
                className="form-input"
                id={props.name}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
                {...props}
            />
        </div>
    )
}

export default Input;

