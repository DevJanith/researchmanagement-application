import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createGroup, getGroups, updateGroup } from "../../../actions/group.action";
import { getUserAccordingToType } from "../../../actions/auth";
import PageLayout from '../../../components/Layout/PageLayout';
import CreateGroup from './CreateGroup/CreateGroup';
import "./GroupManagement.scss";
import UpdateGroup from './UpdateGroup/UpdateGroup';
import ViewGroup from './ViewGroup/ViewGroup';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function GroupManagement() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const dispatch = useDispatch();
    const [groupData, setGroupData] = useState({
        groupName: '',
        memberCount: '',
        states: '',
        groupDetails: []
    });

    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        if (currentId != 0) {
            setValue(2)
        }
    }, [currentId])

    useEffect(() => {
        try {
            dispatch(getGroups());
        } catch (error) {
            console.log(error);
        }
    }, [value]);

    const groups = useSelector((state) => state.groupReducer);

    const groupFormData = useSelector((state) => (currentId ? state.groupReducer.find((data) => data._id === currentId) : null));

    useEffect(() => {
        if (groupFormData) {
            setGroupData(groupFormData);
        }
    }, [groupFormData]);

    // console.log(currentId)
    // console.log(GroupData)

    const clear = () => {
        setCurrentId(0);
        setGroupData({
            groupName: '',
            memberCount: '',
            states: '',
            groupDetails: null
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createGroup(groupData));
            clear();
        } else {
            dispatch(updateGroup(currentId, groupData));
            clear();
        }
    }; 

    return (
        <PageLayout>
            <div className='group-management-tabs'>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="View Group" {...a11yProps(0)} />
                            <Tab label="Create Group" {...a11yProps(1)} />
                            <Tab label="Update Group" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <ViewGroup
                            groups={groups}
                            groupData={groupData}
                            setGroupData={setGroupData}
                            handleSubmit={handleSubmit}
                            clear={clear}
                            currentId={currentId}
                            setCurrentId={setCurrentId}
                            value={value}
                            setValue={setValue}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <CreateGroup
                            groupData={groupData}
                            setGroupData={setGroupData}
                            handleSubmit={handleSubmit}
                            clear={clear}
                            currentId={currentId}
                            setCurrentId={setCurrentId}
                            value={value}
                            setValue={setValue}  
                        />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <UpdateGroup
                            groupData={groupData}
                            setGroupData={setGroupData}
                            handleSubmit={handleSubmit}
                            clear={clear}
                            currentId={currentId}
                            setCurrentId={setCurrentId}
                            value={value}
                            setValue={setValue}
                        />
                    </TabPanel>
                </Box>
            </div>
        </PageLayout>
    );
}
