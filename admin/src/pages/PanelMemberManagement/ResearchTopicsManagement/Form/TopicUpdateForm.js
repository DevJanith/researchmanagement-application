import { LoadingButton } from '@mui/lab';
import {
  Card, Container, FormLabel, Typography
} from '@mui/material';
import { Stack, TextField } from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { updateTopics } from "../../../../actions/researchTopics.actions";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function TopicUpdateForm(props) {
  const {
    topics,
    topicData,
    setTopicData,
    handleSubmitForm,
    clear,
    currentId,
    setCurrentId,
    value,
    setValue
  } = props;

  console.log(topics)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const TopicSchema = Yup.object().shape({
    // status: Yup.string().required('Status is required: Pending? Accepted?'),
    // supervisorName: Yup.string().required('Supervisor Name is required'),
    // co_supervisorName: Yup.string().required('Co Supervisor Name is required'),
  });


  const formik = useFormik({
    initialValues: topicData,
    validationSchema: TopicSchema,
    onSubmit: (data, { resetForm }) => {

      console.log(data)

      dispatch(updateTopics(currentId, data));
      // notify()
      resetForm()
      setCurrentId(0)
      clear()
      setValue(0)

    },
  });

  const topicStates = useSelector((state) => state.topicsReducer);
  console.log(topicData)

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const refreshPage =() =>{
    window.location.reload(false);
  }

  //--------Drop Down--------

  const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };


  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={5}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>

            <TextField
              style = {{width: 400}}
              label="Group No"
              {...getFieldProps('groupid')}
              color="secondary"
              disabled={true}
              focused
            />

          </Stack>
          

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>

            <TextField
              style = {{width: 400}}
              label="Leader IT_No"
              {...getFieldProps('leaderid')}
              color="secondary"
              disabled={true}
              focused
            />

          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>

            <TextField
              style = {{width: 400}}
              label="Leader Email"
              {...getFieldProps('leader_email')}
              color="secondary"
              disabled={true}
              focused
            />

          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>

            <TextField
              fullWidth
              label="Member #1 IT_No"
              {...getFieldProps('member1')}
              color="secondary"
              disabled={true}
              focused
            />

            <TextField
              fullWidth
              label="Member #2 IT_No"
              {...getFieldProps('member2')}
              color="secondary"
              disabled={true}
              focused
            />

            <TextField
              fullWidth
              label="Member #3 IT_No"
              {...getFieldProps('member3')}
              color="secondary"
              disabled={true}
              focused
            />

          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>

            <TextField
              style = {{width: 400}}
              label="Group Member Count"
              {...getFieldProps('membercount')}
              color="secondary"
              disabled={true}
              focused
            />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="Research Field"
              {...getFieldProps('research_field')}
              color="secondary"
              disabled={true}
              focused
            />

          </Stack>

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Research Topic"
            {...getFieldProps('research_topic')}
            disabled={true}
          />

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Description"
            {...getFieldProps('description')}
            disabled={true}
          />

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              style = {{width: 400}}
              label="Supervisor Name"
              {...getFieldProps('supervisorName')} 
              focused
            />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              style = {{width: 400}}
              label="Co - Supervisor Name"
              {...getFieldProps('co_supervisorName')} 
              focused
            />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'column' }} spacing={2}>
          <InputLabel htmlFor="component-simple">please type <b>'success'</b> if you want to accept the topic</InputLabel>
            <TextField
              style = {{width: 400}}
              label="Status"
              {...getFieldProps('status')} 
              focused
            />
          </Stack>
            
            
            {/* <Box sx={{ minWidth: 400 }}>
              <FormControl fullWidth>
                <InputLabel 
                  id="demo-simple-select-label"
                  {...getFieldProps('co_supervisorName')}
                ></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box> */}
        </Stack>

        <div style={{ display: "flex", direction: "row", marginTop: "2%" }}>
          <LoadingButton style={{ margin: "2%" }} fullWidth size="large" type="cancel" variant="contained" startIcon={<DeleteIcon /> } >
            Cancel
          </LoadingButton>
          <LoadingButton style={{ margin: "2%" }} fullWidth size="large" type="submit" variant="contained" endIcon={<SendIcon />} >
            Save
          </LoadingButton>
          
        </div>

      </Form>
    </FormikProvider>
  );
}
