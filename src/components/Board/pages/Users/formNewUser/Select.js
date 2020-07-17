import React from 'react';
import '../../../../../App.css';


const Select = (props) => {
    return (
        <div className="form-group">
            <select
                name={props.name}
                defaultValue={props.value}
                onChange={props.handleChange}
            >
                {/* <option value="" disabled></option> */}
                {props.options.map(option => {
                    return (
                        <option
                            key={option}
                            value={option}
                            label={option}>{option}
                        </option>
                    );
                })}
            </select>
        </div>
    )
}

export default Select;

