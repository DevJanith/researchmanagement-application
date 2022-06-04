import { Button, Stack, TextField } from '@mui/material';
import { Field, Form, FormikProvider, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import makeAnimated from 'react-select/animated';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { SelectField } from './Fields/CustomSelectFiled';
import { getUserAccordingToType } from "../../../../../actions/auth"


const options = [
    { value: 'foo', label: 'Foo' },
    { value: 'bar', label: 'Bar' },
]


export default function ItemCreateForm(props) {

    const dispatch = useDispatch();

    const [dataType, setDataType] = useState({
        userType: ''
    })

    useEffect(() => {
        try {
            dataType.userType = "student"
            dispatch(getUserAccordingToType(dataType));
        } catch (error) {
            console.log(error);
        }
    }, [dataType]);

    const users = useSelector((state) => state.authReducer);

    console.log(users)

    const {
        groupData,
        setGroupData,
        handleSubmitForm,
        clear,
        currentId,
        setCurrentId,
        value,
        setValue,
    } = props


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

            // data.traderId = userData?.result?.traderId
            // dispatch(createItem(data));
            // notify()
            // resetForm()
        },
    });

    const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;


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
                    <Field fullWidth name={'groupDetails'} component={SelectField} options={options} />
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
