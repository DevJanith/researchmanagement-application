import React from 'react'
import Select from 'react-select'

export const SelectField = ({
    options,
    field,
    form,
}) => (
    <Select
        options={options}
        name={field.name}
        isMulti
        value={options ? options.find(option => option.value === field.value) : ''}
        onChange={(option) => {
            form.setFieldValue(field.name, option.map((item) => item))
        }}
        onBlur={field.onBlur}
    />
)