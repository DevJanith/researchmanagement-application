// import React from 'react';

// import Select from 'react-select';
// import makeAnimated from 'react-select/animated';
// // import { colourOptions } from '../data';

// const animatedComponents = makeAnimated();


// const colourOptions = [
//     { value: 'red', label: 'Red' },
//     { value: 'blue', label: 'Blue' },
//     { value: 'orange', label: 'Orange' },
//     { value: 'purple', label: 'Purple' },
//     { value: 'yellow', label: 'Yellow' },
//     { value: 'white', label: 'White' },
//     { value: 'green', label: 'Green' },
//     { value: 'black', label: 'Black' },
// ]

// export default function AnimatedMulti() {
//     return (
//         <Select
//             closeMenuOnSelect={false}
//             components={animatedComponents}
//             defaultValue={[colourOptions[4], colourOptions[5]]}
//             isMulti
//             options={colourOptions}
//         />
//     );
// }


import React from 'react'
import Select from 'react-select'

export const SelectField = ({
    options,
    field,
    form,
    defaultOptions
}) => (
    <Select
        options={options}
        name={field.name}
        defaultValue={defaultOptions[0]}
        isMulti
        value={options ? options.find(option => option.value === field.value) : ''}
        onChange={(option) => {
            form.setFieldValue(field.name, option.map((item) => item))
        }}
        onBlur={field.onBlur}
    />
)