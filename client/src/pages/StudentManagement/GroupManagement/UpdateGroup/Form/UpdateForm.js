import { Button, Stack, TextField } from '@mui/material';
import { Field, Form, FormikProvider, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import makeAnimated from 'react-select/animated';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { SelectField } from './Fields/CustomSelectFiled';
import { getUserAccordingToType } from "../../../../../actions/auth"
import { updateGroup } from "../../../../../actions/group.action"

const options = [
    { value: 'foo', label: 'Foo' },
    { value: 'bar', label: 'Bar' },
]


export default function GroupUpdateForm(props) {

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
    {
        users.map((user, index) => (
            user.value = user._id,
            user.label = `${user?.userDetails?.userName} - ${user?.userDetails?.userQNumber}`
        ))
    }

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

    {
        groupData.value = groupData._id;
        // groupData.label = `${groupData?.userDetails?.userName} - ${groupData?.userDetails?.userQNumber}`
    }


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
                    <Field fullWidth name={'groupDetails'} component={SelectField} options={users} defaultValue={groupData} />
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
