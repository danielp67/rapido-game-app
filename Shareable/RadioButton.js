import React from 'react';

const RadioButton = (props) => {

    const {settings, name, value, onChange, label} = props

    return (
        <div className="form-check">
            <input className="form-check-input" type="radio" name={name}
                   id={value} value={value} onChange={onChange}
                   checked={settings[name] === value}
            />
            <label className="form-check-label" htmlFor={value}>
                {label}
            </label>
        </div>
    )
}

export default RadioButton;