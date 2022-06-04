import { Stack, Typography } from '@mui/material';
import React from 'react';
import CreateForm from './Form/CreateForm';


const CreateResearch = (props) => {
  const {
    value,
    setValue,
    // researches,
    // researchData,
    // setResearchData,
    // handleSubmit,
    clear,
    currentId,
    setCurrentId
  } = props 


  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h5" gutterBottom>
          Create Research
        </Typography>
      </Stack>
      <CreateForm
        value={value}
        setValue={setValue}
        // researches={researches}
        // researchData={researchData}
        // setResearchData={setResearchData}
        // handleSubmitForm={handleSubmit}
        clear={clear}
        currentId={currentId}
        setCurrentId={setCurrentId} 
      />
    </>
  )
}

export default CreateResearch