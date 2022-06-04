import { LoadingButton } from '@mui/lab';
import {
  Card, Container, FormLabel, Typography
} from '@mui/material';
import { Stack, TextField } from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import Chip from '@mui/material/Chip';
import PendingIcon from '@mui/icons-material/Pending';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { updateTopics } from "../../../../actions/researchTopics.actions";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';

export default function TopicViewForm(props) {
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

    const BootstrapInput = styled(InputBase)(({ theme }) => ({
      'label + &': {
        marginTop: theme.spacing(3),
      },
      '& .MuiInputBase-input': {
        borderRadius: 25,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 12px',
        transition: theme.transitions.create([
          'border-color',
          'background-color',
          'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
          boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
          borderColor: '#000000',
        },
      },
    }));

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={5}>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <InputLabel htmlFor="component-simple" style={{ marginTop: '12px', marginRight: '30px'}}><b>Group No : </b></InputLabel>
            <BootstrapInput 
              {...getFieldProps('groupid')}
              defaultValue="react-bootstrap" 
              id="bootstrap-input"
              disabled={true} 
            />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <InputLabel htmlFor="component-simple" style={{ marginTop: '12px', marginRight: '5px'}}><b>Leader IT-No : </b></InputLabel>
            <BootstrapInput 
              {...getFieldProps('leaderid')}
              defaultValue="react-bootstrap" 
              id="bootstrap-input"
              disabled={true} 
            />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <InputLabel htmlFor="component-simple" style={{ marginTop: '12px', marginRight: '5px'}}><b>Leader Email :</b></InputLabel>
            <BootstrapInput 
              {...getFieldProps('leader_email')}
              defaultValue="react-bootstrap" 
              id="bootstrap-input"
              disabled={true} 
            />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} style={{ marginTop: '60px'}}>
            <InputLabel htmlFor="component-simple" style={{ marginRight: '75px'}}><b>Member #1 IT_No :</b></InputLabel>
            <InputLabel htmlFor="component-simple" style={{ marginRight: '60px'}}><b>Member #2 IT_No :</b></InputLabel>
            <InputLabel htmlFor="component-simple"><b>Member #3 IT_No :</b></InputLabel>
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} style={{ marginTop: '10px'}}>

            <BootstrapInput 
              {...getFieldProps('member1')}
              defaultValue="react-bootstrap" 
              id="bootstrap-input"
              disabled={true} 
            />

            <BootstrapInput 
              {...getFieldProps('member2')}
              defaultValue="react-bootstrap" 
              id="bootstrap-input"
              disabled={true} 
            />

            <BootstrapInput 
              {...getFieldProps('member3')}
              defaultValue="react-bootstrap" 
              id="bootstrap-input"
              disabled={true} 
            />

          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>

          <InputLabel htmlFor="component-simple" style={{ marginTop: '12px', marginRight: '5px'}}><b>Group Member Count :</b></InputLabel>
            <BootstrapInput 
              style = {{width: 150}}
              {...getFieldProps('membercount')}
              defaultValue="react-bootstrap" 
              id="bootstrap-input"
              disabled={true} 
            />
          </Stack>

          <InputLabel htmlFor="component-simple" style={{ marginTop: '40px', marginRight: '5px'}}><b>Research Field :</b></InputLabel>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} style={{ marginTop: '10px'}}>
         
            <BootstrapInput 
              style = {{width: '1000px'}}
              {...getFieldProps('membercount')}
              defaultValue="react-bootstrap" 
              id="bootstrap-input"
              disabled={true} 
            />
          </Stack>

          <InputLabel htmlFor="component-simple" style={{ marginTop: '40px', marginRight: '5px'}}><b>Research Topic :</b></InputLabel>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} style={{ marginTop: '10px'}}>
         
            <BootstrapInput 
              style = {{width: '1000px'}}
              multiline
              rows={4}
              {...getFieldProps('research_topic')}
              defaultValue="react-bootstrap" 
              id="bootstrap-input"
              disabled={true} 
            />
          </Stack>

          <InputLabel htmlFor="component-simple" style={{ marginTop: '40px', marginRight: '5px'}}><b>Description :</b></InputLabel>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} style={{ marginTop: '10px'}}>
         
            <BootstrapInput 
              style = {{width: '1000px'}}
              multiline
              rows={5}
              {...getFieldProps('description')}
              defaultValue="react-bootstrap" 
              id="bootstrap-input"
              disabled={true} 
            />
          </Stack>

          <InputLabel htmlFor="component-simple" style={{ marginTop: '40px', marginRight: '5px'}}><b>Supervisor Name :</b></InputLabel>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} style={{ marginTop: '10px'}}>
         
            <BootstrapInput 
              style = {{width: '500px'}}
              {...getFieldProps('supervisorName')}
              defaultValue="react-bootstrap" 
              id="bootstrap-input"
              disabled={true} 
            />
          </Stack>

          <InputLabel htmlFor="component-simple" style={{ marginTop: '40px', marginRight: '5px'}}><b>Co - Supervisor Name :</b></InputLabel>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} style={{ marginTop: '10px'}}>
         
            <BootstrapInput 
              style = {{width: '500px'}}
              {...getFieldProps('co_supervisorName')}
              defaultValue="react-bootstrap" 
              id="bootstrap-input"
              disabled={true} 
            />
          </Stack>

          <InputLabel htmlFor="component-simple" style={{ marginTop: '40px', marginRight: '5px'}}><b>Status :</b></InputLabel>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} style={{ marginTop: '10px'}}>
         
            {/* <BootstrapInput 
              style = {{width: '200px'}}
              {...getFieldProps('status')}
              defaultValue="react-bootstrap" 
              id="bootstrap-input"
              disabled={true} 
            /> */}


            {({...getFieldProps('status')} == "pending" ?
              <>
              <Chip icon={<PendingIcon />} label="pending" color="error" />
              </>
              : 
              <>
              <Chip icon={< CheckRoundedIcon />} label="accepted" color="success" />
              </>
            )}
            

          </Stack>
            
        </Stack>

        {/* <div style={{ display: "flex", direction: "row", marginTop: "2%" }}>
          <LoadingButton style={{ margin: "2%" }} fullWidth size="large" type="cancel" variant="contained" startIcon={<DeleteIcon /> } >
            Cancel
          </LoadingButton>
          <LoadingButton style={{ margin: "2%" }} fullWidth size="large" type="submit" variant="contained" endIcon={<SendIcon />} >
            Save
          </LoadingButton>
          
        </div> */}

      </Form>
    </FormikProvider>
  );
}
