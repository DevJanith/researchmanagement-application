import { Stack, Typography } from '@mui/material';
import React from 'react';
import GroupUpdateForm from './Form/UpdateForm';


const UpdateGroup = (props) => {

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
                    Update Group
                </Typography>
            </Stack>
            <GroupUpdateForm
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

export default UpdateGroup