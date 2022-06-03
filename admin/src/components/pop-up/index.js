import React from 'react'
import { Grid, Paper, Button, Typography } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const RegistrationForm = () => {
    const paperStyle = { padding: '0 15px 40px 15px', width: 400, backgroundImage: "url(https://wallpaperaccess.com/full/3006253.jpg)", }
    const btnStyle = { marginTop: 10 }

    const phoneRegExp=/^[2-9]{2}[0-9]{8}/
    const passwordRegExp=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

    const initialValues = {
        groupid: '',
        leaderid: '',
        leader_email: '',
        member1: '',
        member2: '',
        member3: '',
        membercount:'',
        research_topic: '',
        research_field: '',
        description: ''
    }
    const validationSchema = Yup.object().shape({
        // name: Yup.string().min(3, "It's too short").required("Required"),
        // email: Yup.string().email("Enter valid email").required("Required"),
        // // phoneNumber: Yup.number().typeError("Enter valid Phone number").required("Required"),
        // phoneNumber:Yup.string().matches(phoneRegExp,"Enter valid Phone number").required("Required"),
        // password: Yup.string().min(8, "Minimum characters should be 8")
        // .matches(passwordRegExp,"Password must have one upper, lower case, number, special symbol").required('Required'),
        // confirmPassword:Yup.string().oneOf([Yup.ref('password')],"Password not matches").required('Required')


        groupid: Yup.string().min(3, "It's too short").required("Required"),
        leaderid: Yup.string().min(10, "Enter valid IT number").required("Required"),
        leader_email: Yup.string().email("Enter valid email").required("Required"),
        member1: Yup.string().min(10, "Enter valid IT number").required("Required"),
        member2: Yup.string().min(10, "Enter valid IT number").required("Required"),
        member3: Yup.string().min(10, "Enter valid IT number").required("Required"),
        membercount: Yup.string().min(2, "Minimum characters should be 5").required("Required"),
        research_topic: Yup.string().min(50, "Minimum characters should be 50").required("Required"),
        research_field: Yup.string().min(20, "Minimum characters should be 20").required("Required"),
        description: Yup.string().min(200, "Minimum characters should be 200").required("Required")

        

    })
    const onSubmit = (values, props) => {

        alert(JSON.stringify(values), null, 2)
        props.resetForm()
    }
    return (
        <Grid>
            <Paper elevation={0} style={paperStyle}>
                <Grid align='center'>
                    <Typography variant='caption'>Fill the form to create research topic details</Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form noValidate>
                            {/* <TextField label='Name' name="name" fullWidth value={props.values.name}
                    onChange={props.handleChange} /> 

                            {/* <Field as={TextField} name='name' label='Name' fullWidth
                                error={props.errors.name && props.touched.name}
                                helperText={<ErrorMessage name='name' />} required />

                            {/* <TextField label='Email' name='email' type='Email' fullWidth 
                    {...props.getFieldProps('email')}/>

                            {/* <Field as={TextField} name='email' label='Email' fullWidth
                                error={props.errors.email && props.touched.email}
                                helperText={<ErrorMessage name='email' />} required />

                            <Field as={TextField} name="phoneNumber" label='Phone Number' fullWidth
                                error={props.errors.phoneNumber && props.touched.phoneNumber}
                                helperText={<ErrorMessage name='phoneNumber' />} required />

                            <Field as={TextField} name='password' label='Password' type='password' fullWidth
                                error={props.errors.password && props.touched.password}
                                helperText={<ErrorMessage name='password' />} required />

                            <Field as={TextField} name='confirmPassword' label='Confirm Password' type='password' fullWidth
                                error={props.errors.confirmPassword && props.touched.confirmPassword}
                                helperText={<ErrorMessage name='confirmPassword' />} required /> */}

                            <Field as={TextField} name='groupid' label='Group ID :' fullWidth
                                error={props.errors.groupid && props.touched.groupid}
                                helperText={<ErrorMessage name='groupid' />} required />
                            
                            <Field as={TextField} name='leaderid' label='Group Leader ID :' fullWidth
                                error={props.errors.leaderid && props.touched.leaderid}
                                helperText={<ErrorMessage name='leaderid' />} required />

                            <Field as={TextField} name='leader_email' label='Leader Email :' fullWidth
                                error={props.errors.leader_email && props.touched.leader_email}
                                helperText={<ErrorMessage name='leader_email' />} required />

                            <Field as={TextField} name='member1' label='Member #1 IT :' fullWidth
                                error={props.errors.member1 && props.touched.member1}
                                helperText={<ErrorMessage name='member1' />} required />

                            <Field as={TextField} name='member2' label='Member #2 IT :' fullWidth
                                error={props.errors.member2 && props.touched.member2}
                                helperText={<ErrorMessage name='member2' />} required />

                            <Field as={TextField} name='member3' label='Member #3 IT :' fullWidth
                                error={props.errors.member3 && props.touched.member3}
                                helperText={<ErrorMessage name='member3' />} required />

                            <Field as={TextField} name='membercount' label='Group Member Count :' fullWidth
                                error={props.errors.membercount && props.touched.membercount}
                                helperText={<ErrorMessage name='membercount' />} required />

                            <Field as={TextField} name='research_topic' label='Research Topic :' fullWidth
                                error={props.errors.research_topic && props.touched.research_topic}
                                helperText={<ErrorMessage name='research_topic' />} required />
                                
                            <Field as={TextField} name='research_field' label='Research Field :' fullWidth
                                error={props.errors.research_field && props.touched.research_field}
                                helperText={<ErrorMessage name='research_field' />} required />
                                
                            <Field as={TextField} name='description' label='Description :' fullWidth
                                error={props.errors.description && props.touched.description}
                                helperText={<ErrorMessage name='description' />} required />

                            <br />
                            <br />

                            <Button type='submit' style={btnStyle} variant='contained'
                                color='primary'>Register</Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default RegistrationForm;
