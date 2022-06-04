import { Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUserAccordingToType } from "../../../../actions/auth";
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

    const dispatch = useDispatch();

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
    const [defaultOptions, setDefaultOptions] = useState([])


    useEffect(() => {
        try {
            users.map((user, index) => (
                user.value = user._id,
                user.label = `${user?.userDetails?.userName} - ${user?.userDetails?.userQNumber}`
            ))
            setOptions(users)
            setDefaultOptions(groupData?.groupDetails)
        } catch (error) {
            console.log(error)
        }
    }, [users, groupData])

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
                options={options}
                defaultOptions={defaultOptions}
            />
        </>
    )
}

export default UpdateGroup