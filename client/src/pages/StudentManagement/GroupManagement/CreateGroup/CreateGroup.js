import { Stack, Typography } from '@mui/material';
import React from 'react';
import CreateForm from './Form/CreateForm';


const CreateGroup = (props) => {

    const {
        groupData,
        setGroupData,
        handleSubmit,
        clear,
        currentId,
        setCurrentId,
        value,
        setValue,
    } = props

    return (
        <>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h5" gutterBottom>
                    Create Group
                </Typography>
            </Stack>
            <CreateForm
                groupData={groupData}
                setGroupData={setGroupData}
                handleSubmitForm={handleSubmit}
                clear={clear}
                currentId={currentId}
                setCurrentId={setCurrentId}
                value={value}
                setValue={setValue}
            />
        </>
    )
}

export default CreateGroup