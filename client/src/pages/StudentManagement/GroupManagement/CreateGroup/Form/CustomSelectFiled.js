import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
// import { colourOptions } from '../data';

const animatedComponents = makeAnimated();

const colourOptions = [
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' },
    { value: 'orange', label: 'Orange' },
    { value: 'purple', label: 'Purple' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'white', label: 'White' },
    { value: 'green', label: 'Green' },
    { value: 'black', label: 'Black' },
]

export default function CustomSelectFiled() {
    return (
        <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            // defaultValue={[colourOptions[4], colourOptions[5]]}
            isMulti
            options={colourOptions}
        />
    );
}