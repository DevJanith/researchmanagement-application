import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPresentaionTemplate, updatePresentaionTemplate} from '../../actions/presentationTemplates';

const Form = ({ currentId, setCurrentId }) => {
  const [presentaionTemplateData, setPresentaionTemplateData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const presentaionTemplate = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (presentaionTemplate) setPresentaionTemplateData(presentaionTemplate);
  }, [presentaionTemplate]);

  const clear = () => {
    setCurrentId(0);
    setPresentaionTemplateData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPresentaionTemplate(presentaionTemplateData));
      clear();
    } else {
      dispatch(updatePresentaionTemplate(currentId, presentaionTemplateData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPresentaionTemplateData({ ...postData, creator: e.target.value })} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={presentaionTemplateData.title} onChange={(e) => setPresentaionTemplateData({ ...presentaionTemplateData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={presentaionTemplateData.message} onChange={(e) => setPresentaionTemplateData({ ...presentaionTemplateData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={presentaionTemplateData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPresentaionTemplateData({ ...presentaionTemplateData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
