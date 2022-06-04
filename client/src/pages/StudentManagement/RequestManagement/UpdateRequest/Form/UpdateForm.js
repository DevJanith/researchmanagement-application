import { Button, Grid, Stack, TextField } from '@mui/material';
import { Field, Form, FormikProvider, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import { getUserAccordingToType } from "../../../../../actions/auth";
import { getGroups } from "../../../../../actions/group.action";
import { SingleSelectField } from "./Fields/CustomSingleSelectField";


export default function UpdateForm(props) {

    const {
        value,
        setValue,
        researches,
        researchData,
        setResearchData,
        handleSubmitForm,
        clear,
        currentId,
        setCurrentId,
    } = props


    const dispatch = useDispatch();
    // const groupDispatch = useDispatch();

    const [dataType, setDataType] = useState({
        userType: ''
    })

    useEffect(() => {
        try {
            dataType.userType = "supervisor"
            dispatch(getUserAccordingToType(dataType));
        } catch (error) {
            console.log(error);
        }
    }, [dataType]);

    useEffect(() => {
        try {
            dispatch(getGroups())
        } catch (error) {
            console.log(error);
        }
    }, []);

    const users = useSelector((state) => state.authReducer);
    const groups = useSelector((state) => state.groupReducer);



    const [userOptions, setUserOptions] = useState([])
    const [groupOptions, setGroupOptions] = useState([])


    useEffect(() => {
        try {
            users.map((user, index) => (
                user.value = user._id,
                user.label = `${user?.userDetails?.userName} - ${user?.userDetails?.userQNumber}`
            ))

            setUserOptions(users)

        } catch (error) {
            console.log(error)
        }
    }, [users])

    useEffect(() => {
        try {
            groups.map((group, index) => (
                group.value = group._id,
                group.label = `${group?.groupID} - ${group?.groupName}`
            ))

            setGroupOptions(groups)

        } catch (error) {
            console.log(error)
        }
    }, [groups])

    const researchSchema = Yup.object().shape({
        researchTopic: Yup.string().required('Research Topic Name is required'),
        researchField: Yup.string().required('Research Field is required'),
        description: Yup.string().required('Description is required'),
        // supervisorName: null,
        // groupDetails: null
    });

    const formik = useFormik({
        initialValues: researchData,
        validationSchema: researchSchema,
        onSubmit: (data, { resetForm }) => {
            console.log(data)
            // data.states = "1" 
            // dispatch(createGroup(data));
            // clear()
            // setValue(0)
            // // notify()
            // resetForm()
        },
    });

    const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

    console.log(userOptions)
    console.log(groupOptions)


    return (
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <TextField
                            fullWidth
                            label="Research Topic"
                            {...getFieldProps('researchTopic')}
                            error={Boolean(touched.researchTopic && errors.researchTopic)}
                            helperText={touched.researchTopic && errors.researchTopic}
                        />
                        <TextField
                            fullWidth
                            label="Research Field"
                            {...getFieldProps('researchField')}
                            error={Boolean(touched.researchField && errors.researchField)}
                            helperText={touched.researchField && errors.researchField}
                        />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <TextField
                            fullWidth
                            label="Research Description"
                            multiline
                            rows={4}
                            {...getFieldProps('description')}
                            error={Boolean(touched.description && errors.description)}
                            helperText={touched.description && errors.description}
                        />
                    </Stack>
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={6}>
                            <Field fullWidth name={'supervisorDetails'} component={SingleSelectField} options={userOptions} />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <Field fullWidth name={'groupDetails'} component={SingleSelectField} options={groupOptions} />
                        </Grid>
                    </Grid>
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
