import { Stack, Typography } from '@mui/material'
import React from 'react'
import CreateForm from './Form/CreateForm'

const CreateResearch = (props) => {
  const {
    value,
    setValue,
    researches,
    researchData,
    setResearchData,
    handleSubmit,
    clear,
    currentId,
    setCurrentId
  } = props

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h5" gutterBottom>
          Create Group
        </Typography>
      </Stack>
      <CreateForm
        value={value}
        setValue={setValue}
        researches={researches}
        researchData={researchData}
        setResearchData={setResearchData}
        handleSubmit={handleSubmit}
        clear={clear}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
    </>
  )
}

export default CreateResearch