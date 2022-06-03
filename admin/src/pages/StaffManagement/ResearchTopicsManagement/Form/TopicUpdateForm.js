import { LoadingButton } from '@mui/lab';
import { Stack, TextField } from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { updateTopics } from "../../../../actions/researchTopics.actions";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

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


  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>

            <TextField
              fullWidth
              label="groupid"
              {...getFieldProps('groupid')}
              color="secondary"
              disabled={true}
              focused
            />
            <TextField
              fullWidth
              label="Staus"
              {...getFieldProps('status')} 
              focused
            />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>

            <TextField
              fullWidth
              label="leaderid"
              {...getFieldProps('leaderid')}
              color="secondary"
              disabled={true}
              focused
            />

            <TextField
              fullWidth
              label="leader_email"
              {...getFieldProps('leader_email')}
              color="secondary"
              disabled={true}
              focused
            />

          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>

            <TextField
              fullWidth
              label="member1"
              {...getFieldProps('member1')}
              color="secondary"
              disabled={true}
              focused
            />

            <TextField
              fullWidth
              label="member2"
              {...getFieldProps('member2')}
              color="secondary"
              disabled={true}
              focused
            />

            <TextField
              fullWidth
              label="member3"
              {...getFieldProps('member3')}
              color="secondary"
              disabled={true}
              focused
            />

          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>

            <TextField
              fullWidth
              label="membercount"
              {...getFieldProps('membercount')}
              color="secondary"
              disabled={true}
              focused
            />

            <TextField
              fullWidth
              label="research_field"
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
            label="research_topic"
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

          {/* <TextField
              fullWidth
              label="Item name"
              {...getFieldProps('name')}
              error={Boolean(touched.name && errors.name)}
              helperText={touched.name && errors.name}
            /> */}

          {/* <TextField
              fullWidth
              label="Item Quantity"
              {...getFieldProps('qty')}
              error={Boolean(touched.qty && errors.qty)}
              helperText={touched.qty && errors.qty}
            />
            <TextField
              fullWidth
              label="Item Price"
              {...getFieldProps('price')}
              error={Boolean(touched.price && errors.price)}
              helperText={touched.price && errors.price}
            /> */}
          {/* </Stack>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Description"
            {...getFieldProps('description')}
            error={Boolean(touched.description && errors.description)}
            helperText={touched.description && errors.description}
          /> */}
        </Stack>

        <div style={{ display: "flex", direction: "row", marginTop: "2%" }}>
          <LoadingButton style={{ margin: "2%" }} fullWidth size="large" type="button" variant="contained" startIcon={<DeleteIcon />}>
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
