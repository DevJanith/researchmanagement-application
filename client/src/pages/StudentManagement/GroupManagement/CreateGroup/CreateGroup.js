import { Stack, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import CreateForm from './Form/CreateForm';
import { useDispatch, useSelector } from "react-redux";
import { getUserAccordingToType } from "../../../../actions/auth";

const CreateGroup = (props) => {

    const dispatch = useDispatch();

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

    //select data

    const [dataType, setDataType] = useState({
        userType: ''
    })

    useEffect(() => {
        try {
            dataType.userType = "student"
            dispatch(getUserAccordingToType(dataType));
        } catch (error) {
            console.log(error);
        }
    }, [dataType]);

    const users = useSelector((state) => state.authReducer);

    const [options, setOptions] = useState([])

    useEffect(() => {
        try {
            users.map((user, index) => (
                user.value = user._id,
                user.label = `${user?.userDetails?.userName} - ${user?.userDetails?.userQNumber}`
            ))
            setOptions(users)
        } catch (error) {
            console.log(error)
        }
    }, [users])

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
                options={options}
            />
        </>
    )
}

export default CreateGroup