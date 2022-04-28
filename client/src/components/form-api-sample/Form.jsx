import "./form.scss";
import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";
import { TextField, Button } from "@mui/material";

const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log("values");
    try {
      dispatch(createPost(values));
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = () => {
    console.log("update btn clicked");
  };
  const handleDelete = () => {
    console.log("delete btn clicked");
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      creator: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);
      handleSubmit(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <div className="formHeaderContainer"> Create Post</div>
      <div className="formFieldsContainer">
        <div className="formFields">
          <TextField
            label="Title"
            variant="outlined"
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </div>
        <div className="formFields">
          <TextField
            label="Creator"
            variant="outlined"
            id="creator"
            name="creator"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.creator}
          />
        </div>
      </div>
      <div className="formFieldsContainer">
        <div className="formFields">
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            id="message"
            name="message"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
        </div>
      </div>
      <div className="formActivityContainer">
        <Button variant="contained" type="submit">
          Contained
        </Button>
        <Button
          variant="contained"
          type="button"
          onClick={(e) => {
            handleUpdate();
          }}
        >
          Update
        </Button>
        <Button
          variant="contained"
          type="button"
          onClick={(e) => {
            handleDelete();
          }}
        >
          Delete
        </Button>
      </div>
    </form>
  );
};

export default Form;
