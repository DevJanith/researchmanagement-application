import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import PresentationTemplate from './PresentationTemplate/PresentationTemplate';
import useStyles from './styles';

const PresentationTemplates = ({ setCurrentId }) => {
  const presentationTemplates = useSelector((state) => state.presentationTemplates);
  const classes = useStyles();

  return (
    !presentationTemplates.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {presentationTemplates.map((presentationTemplate) => (
          <Grid key={presentationTemplate._id} item xs={12} sm={6} md={6}>
            <PresentationTemplate post={presentationTemplate} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default PresentationTemplates;
