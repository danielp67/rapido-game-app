import React from 'react';
import RadioButton from "./RadioButton";

const RadioGroup = (props) => {

    const {settings, handleChange, radioParams, name} = props


        return (
<>
    {radioParams.map((mapping, index) => (

        <RadioButton
            key={index}
            settings={settings}
            name={name}
            value={mapping.value}
            onChange={handleChange}
            label={mapping.label}
        />

    ))}

</>

        )
};

export default RadioGroup;