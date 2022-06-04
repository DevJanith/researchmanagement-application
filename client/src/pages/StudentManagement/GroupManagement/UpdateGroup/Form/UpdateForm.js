import { Button, Stack, TextField } from '@mui/material';
import { Field, Form, FormikProvider, useFormik } from 'formik';
import React from 'react';
import { useDispatch } from "react-redux";
import * as Yup from 'yup';
import { updateGroup } from "../../../../../actions/group.action";
import { SelectField } from './Fields/CustomSelectFiled';

const options = [
    { value: 'foo', label: 'Foo' },
    { value: 'bar', label: 'Bar' },
]


export default function GroupUpdateForm(props) {
    const {
        groupData,
        setGroupData,
        handleSubmitForm,
        clear,
        currentId,
        setCurrentId,
        value,
        setValue,
        options,
        defaultOptions
    } = props

    const dispatch = useDispatch();

    const groupSchema = Yup.object().shape({
        groupName: Yup.string().required('group Name is required'),
        memberCount: Yup.string().required('member Count is required'),
        // groupDetails: "",
    });


    const formik = useFormik({
        initialValues: groupData,
        validationSchema: groupSchema,
        onSubmit: (data, { resetForm }) => {
            console.log("test item form submit click")
            console.log(data)
            data.groupID = "0a78d933-520e-430a-8192-df54b9bc3536"
            data.states = "1"

            dispatch(updateGroup(data));
            // notify()
            resetForm()
        },
    });

    const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

    console.log(defaultOptions)
    return (
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <TextField
                            fullWidth
                            label="Group name"
                            {...getFieldProps('groupName')}
                            error={Boolean(touched.groupName && errors.groupName)}
                            helperText={touched.groupName && errors.groupName}
                        />
                        <TextField
                            fullWidth
                            label="Group Member Count"
                            {...getFieldProps('memberCount')}
                            error={Boolean(touched.memberCount && errors.memberCount)}
                            helperText={touched.memberCount && errors.memberCount}
                        />
                    </Stack>
                    <Field fullWidth name={'groupDetails'} component={SelectField} options={options} defaultOptions={defaultOptions} />
                </Stack>

                <div style={{ display: "flex", direction: "row", marginTop: "2%" }}>
                    <Button style={{ margin: "2%" }} fullWidth size="large" type="button" variant="contained" >
                        Cancel
                    </Button>
                    <Button style={{ margin: "2%" }} fullWidth size="large" type="submit" variant="contained" >
                        Save
                    </Button>
                </div>

            </Form>
        </FormikProvider>
    );
}
