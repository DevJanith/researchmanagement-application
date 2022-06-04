import React from 'react'
import Select from 'react-select'

export const SingleSelectField = ({
    options,
    field,
    form,
}) => {
    console.log(options)
    return (
        <Select
            options={options}
            name={field.name}
            value={options ? options.find(option => option.value === field.value) : ''}
            onChange={(option) => form.setFieldValue(field.name, option.value)}
            onBlur={field.onBlur}
        />
    )
}